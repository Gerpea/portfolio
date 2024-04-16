import React from "react";
import type { Preview } from "@storybook/react";
import { Ubuntu_Mono, Gugi } from "next/font/google";
import '../app/globals.css'

const ubuntuMono = Ubuntu_Mono({
  subsets: ["latin", "cyrillic"],
  weight: ['400', '700'],
  variable: '--font-main',
  display: 'swap'
});

const gugi = Gugi({
  subsets: ["latin"],
  weight: '400',
  variable: '--font-date',
  display: 'swap'
});


// const preview: Preview = {
//   parameters: {
//     controls: {
//       matchers: {
//         color: /(background|color)$/i,
//         date: /Date$/i,
//       },
//     },
//   },
// };

const preview: Preview = {
  decorators: [
    (Story) => (
      <div className={`${ubuntuMono.variable} ${gugi.variable} ${ubuntuMono.className}`}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    backgrounds: {
      default: '#070606'
    }
  }
};

export default preview;
