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
          __html: `(function(){
            if(typeof window==='undefined')return;
            window.__loaderStartTime=performance.now();
            function cleanLoader(){
              var el=document.getElementById('site-loader');
              if(el){
                el.classList.add('sl-out');
                el.style.pointerEvents='none';
                el.style.visibility='hidden';
                document.body.style.removeProperty('overflow');
                document.documentElement.style.removeProperty('overflow');
                document.body.style.overflow='';
                document.documentElement.style.overflow='';
                setTimeout(function(){
                  if(el&&el.parentNode) el.parentNode.removeChild(el);
                },500);
              }
            }
            // Absolute emergency fallback: guarantee loader never stays past 3.5s
            setTimeout(cleanLoader, 3500);
          })();`,
        }}
      />
      <noscript>
        <style>{"#site-loader{display:none}"}</style>
      </noscript>
    </>
  );
}

