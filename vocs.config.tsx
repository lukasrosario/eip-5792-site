import { defineConfig } from 'vocs'

export default defineConfig({
  title: "EIP-5792",
  titleTemplate: "%s · EIP-5792",
  description: "Next-gen wallet RPCs",
  ogImageUrl: "https://vocs.dev/api/og?title=%title&description=%description",
  head() {
    return (
      <>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };",
          }}
        />
        <script defer src="/_vercel/insights/script.js" />
      </>
    );
  },
  theme: {
    accentColor: {
      light: "#73F7FF",
      dark: "#73F7FF",
    },
    variables: {
      color: {
        background: {
          light: "white",
          dark: "#151A26",
        },
        backgroundDark: {
          light: "#F5F5F5",
          dark: "#0F131E",
        },
        textAccent: {
          light: "#050F19",
          dark: "white",
        },
      },
    },
  },
  topNav: [{ text: "EIP", link: "https://eips.ethereum.org/EIPS/eip-5792" }],
  socials: [
    {
      icon: "github",
      link: "https://github.com/lukasrosario/eip-5792-site",
    },
  ],
  sidebar: [
    {
      text: "Introduction",
      link: "/introduction",
    },
    {
      text: "Getting Started",
      link: "/getting-started",
    },
    {
      text: "Reference",
      collapsed: false,
      items: [
        {
          text: "wallet_getCapabilities",
          link: "/reference/getCapabilities",
        },
        {
          text: "wallet_sendCalls",
          link: "/reference/sendCalls",
        },
        {
          text: "wallet_getCallsStatus",
          link: "/reference/getCallsStatus",
        },
        {
          text: "wallet_showCallsStatus",
          link: "/reference/showCallsStatus",
        },
      ],
    },
    {
      text: "Ecosystem",
      collapsed: false,
      items: [
        {
          text: "Wallets",
          link: "/ecosystem/wallets",
        },
        {
          text: "Tools",
          link: "/ecosystem/tools",
        },
        {
          text: "Apps",
          link: "/ecosystem/apps",
        },
      ],
    },
    {
      text: "Capabilities",
      collapsed: false,
      items: [
        {
          text: "paymasterService",
          link: "/capabilities/paymasterService",
        },
        {
          text: "flowControl",
          link: "/capabilities/flowControl",
        },
        {
          text: "auxiliaryFunds",
          link: "/capabilities/auxiliaryFunds",
        },
      ],
    },
  ],
});
