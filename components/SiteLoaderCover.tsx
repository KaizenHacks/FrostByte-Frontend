import { LOADER_CSS, LOADER_HTML } from "@/lib/siteLoaderCover";

export default function SiteLoaderCover() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: LOADER_CSS }} />
      <div
        id="site-loader"
        role="status"
        aria-label="Loading"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: LOADER_HTML }}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: "if(typeof window!=='undefined'){window.__loaderStartTime=performance.now();}",
        }}
      />
      <noscript>
        <style>{"#site-loader{display:none}"}</style>
      </noscript>
    </>
  );
}
