import type { Metadata } from 'next';
import Impressum from '@/components/Impressum';

export const metadata: Metadata = {
  title: 'Impressum | Tara-Fusion',
  description: 'Impressum und rechtliche Informationen zu Tara-Fusion by UpTux',
};

export default function ImpressumPage() {
  return <Impressum />;
}
