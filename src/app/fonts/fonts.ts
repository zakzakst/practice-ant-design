import { Noto_Sans_JP, Noto_Sans_Mono } from "next/font/google";

// next/fontはappディレクトリのなかでないと動かないっぽい
// NOTE: jsの変数でカスタムプロパティの値を管理したかったが、以下の状況のため、諦めた
// next/fontに渡す引数のvariableに変数を渡すことができなかった（リテラルしか設定できないとエラーが出た）
// - tailwind configのほうでは、上手く変数を参照できなかった（これはもう少し調べればできるかもしれない）
// - globals.cssにも直接文字列を記載する必要がある

// export const fontNotoSansJpVariable = "--font-Noto-Sans-JP";

export const fontNotoSansJp = Noto_Sans_JP({
  weight: ["400", "700"],
  subsets: ["latin"],
  // variable: fontNotoSansJpVariable,
  variable: "--font-noto-sans-jp",
  display: "swap",
  fallback: ["-apple-system", "BlinkMacSystemFont", "sans-serif"],
});

export const fontNotoSansMono = Noto_Sans_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-noto-sans-mono",
  display: "swap",
  fallback: ["monospace"],
});
