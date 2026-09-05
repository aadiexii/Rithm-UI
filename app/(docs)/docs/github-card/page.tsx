import GitHubProfileCard from '@/components/rithmui/github-profile-card';
import PreviewCodeCard from '@/app/(docs)/docs/components/preview-code-card';

export default function GitHubProfileCardPage() {
  return (
    <PreviewCodeCard
      path="app/(docs)/docs/github-card/page.tsx"
      cli="@rithmui/github-profile-card"
      installCodePath="components/rithmui/github-profile-card.tsx"
    >
      <GitHubProfileCard />
    </PreviewCodeCard>
  );
}
