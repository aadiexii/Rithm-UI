import type { Metadata } from 'next';
import { createNoIndexMetadata } from '@/lib/metadata';

export const metadata: Metadata = createNoIndexMetadata({
  title: 'Rithm UI Email Preferences',
  description: 'Use a private email link to unsubscribe from Rithm UI newsletter messages.',
  path: '/unsubscribe',
});

export default function UnsubscribeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
