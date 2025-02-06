import { useEffect } from 'react';
import { useHistory } from '@docusaurus/router';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const history = useHistory();

  useEffect(() => {
    history.push('/docs/intro');
  }, []);

  return (
    <Layout title={`${siteConfig.title}`} description="Description will go into a meta tag in <head />">
      <div />
    </Layout>
  );
}
