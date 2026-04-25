import PageClient from "./page.client";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ redirect?: string }>;
}) {
  const params = await searchParams;
  const redirect = params.redirect;

  return <PageClient redirect={redirect} />;
}