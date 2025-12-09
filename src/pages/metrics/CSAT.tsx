import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Section } from '@/components/ui/Section';
import { Heading, Text } from '@/components/ui/Typography';

const CSAT: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>CSAT (Customer Satisfaction Score) | Growmate</title>
            </Helmet>

            <div className="min-h-screen bg-black-base text-white flex flex-col">
                <Header />

                <main className="flex-grow">
                    <Section className="pt-32">
                        <div className="text-center max-w-4xl mx-auto">
                            <Heading as="h1" variant="h1" className="mb-6">
                                CSAT (Customer Satisfaction Score)
                            </Heading>
                            <Text variant="lg" muted>
                                Conteúdo em desenvolvimento.
                            </Text>
                        </div>
                    </Section>
                </main>

                <Footer />
            </div>
        </>
    );
};

export default CSAT;
