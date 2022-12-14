import { Html, Head, Main, NextScript } from "next/document";
import Image from "next/image";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head></Head>
      <body>
        <Main />
        <NextScript />
        <Script
          strategy="afterInteractive"
          id="yandex-metrika"
          dangerouslySetInnerHTML={{
            __html: `
               (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
               var z = null;m[i].l=1*new Date();
               for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
               k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
               (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
            
               ym(90119760, "init", {
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    webvisor:true
               });
            `,
          }}
        />
        <noscript>
          <div>
            <Image
              src="https://mc.yandex.ru/watch/90119760"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
      </body>
    </Html>
  );
}
