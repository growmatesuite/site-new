
import { getStrapiMedia } from "@/lib/strapi";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { extractText, slugify } from "@/lib/blog-utils";

interface ArticleContentProps {
    content: any;
}

export function ArticleContent({ content }: ArticleContentProps) {
    if (!content) return null;

    return (
        <div className="prose prose-invert prose-lg mx-auto 
            prose-headings:font-heading prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-white
            prose-p:text-gray-200 prose-p:leading-[1.8] prose-p:text-lg
            prose-strong:text-white prose-strong:font-bold
            prose-a:text-green-primary prose-a:no-underline hover:prose-a:underline
            prose-blockquote:border-l-green-primary prose-blockquote:bg-black-tertiary/40 prose-blockquote:py-4 prose-blockquote:px-8 prose-blockquote:rounded-r-2xl prose-blockquote:text-gray-300 prose-blockquote:not-italic
            prose-img:rounded-3xl prose-img:border prose-img:border-white/10
            prose-code:text-purple-primary prose-code:bg-purple-primary/10 prose-code:px-2 prose-code:py-0.5 prose-code:rounded-lg prose-code:before:content-none prose-code:after:content-none prose-code:font-mono prose-code:border prose-code:border-purple-primary/10
            prose-pre:bg-black-tertiary prose-pre:border prose-pre:border-white/5 prose-pre:rounded-2xl prose-pre:p-8 prose-pre:font-mono prose-pre:text-purple-200
            prose-ol:marker:text-purple-primary prose-ol:marker:font-bold
            prose-ul:marker:text-purple-primary
            prose-li:text-gray-200
            max-w-none
            [&_strong]:text-white [&_strong]:drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]
            [&_em]:text-green-primary [&_em]:not-italic [&_em]:font-bold
            [&_u]:decoration-purple-primary [&_u]:text-purple-primary [&_u]:no-underline [&_u]:font-bold
            [&_mark]:bg-green-primary/20 [&_mark]:text-green-primary [&_mark]:px-1.5 [&_mark]:py-0.5 [&_mark]:rounded
            [&_*]:break-words">
            <BlocksRenderer
                content={content}
                blocks={{
                    heading: ({ children, level }) => {
                        const text = extractText(children);
                        const id = slugify(text);
                        const Tag = `h${level}` as any;
                        return <Tag id={id} className="scroll-mt-32 uppercase tracking-tight">{children}</Tag>;
                    },
                    quote: ({ children }) => (
                        <div className="relative my-8 group">
                            <div className="absolute inset-0 bg-black-tertiary/40 rounded-xl" />
                            <blockquote className="relative z-10 border-l-4 border-green-primary py-6 px-8 not-italic m-0 text-gray-200 italic font-medium leading-[1.8]">
                                {children}
                            </blockquote>
                        </div>
                    ),
                    code: ({ children }) => (
                        <div className="relative my-6 inline-block w-full">
                            <div className="bg-[#1A1B26]/80 border border-purple-primary/10 rounded-xl px-6 py-4 font-mono text-sm md:text-base text-purple-300 shadow-xl shadow-purple-primary/5 hover:border-purple-primary/30 transition-colors">
                                <span className="text-purple-primary mr-2 opacity-50">&gt;</span>
                                {children}
                            </div>
                        </div>
                    ),
                    image: ({ image }) => {
                        const { url, alternativeText, width, height } = image;
                        const aspectRatio = (width && height) ? width / height : 16 / 9;

                        return (
                            <div className="relative my-12 w-full overflow-hidden rounded-3xl border border-white/10 shadow-2xl transition-all duration-300 hover:border-green-primary/30 group bg-white/5">
                                <div style={{ aspectRatio: `${aspectRatio}` }}>
                                    <img
                                        src={getStrapiMedia(url) || ""}
                                        alt={alternativeText || ""}
                                        className="object-contain w-full h-full transition-transform duration-500 group-hover:scale-[1.01]"
                                    />
                                </div>
                            </div>
                        );
                    },
                }}
            />
        </div>
    );
}
