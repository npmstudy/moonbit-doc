import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Moonbit Docs",
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "Start Here",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Getting Started", link: "/start/first/" },
            { label: "Install", link: "/start/install/" },
            { label: "Editor Setup", link: "/start/editor/" },
            { label: "Upgrade Moonbit", link: "/start/upgrade/" },
          ],
        },
        {
          label: "Core Concepts",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Why Moonbit", link: "/concepts/why/" },
            { label: "Morden", link: "/concepts/morden/" },
            { label: "Wasm", link: "/concepts/wasm/" },
            { label: "Performence", link: "/concepts/performence/" },
          ],
        },
        {
          label: "Tutorials",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Build a Wasm app", link: "/tutorials/wasm/" },
            {
              label: "Extend with Exec",
              link: "/tutorials/exec/",
            },
            {
              label: "Extend with lib",
              link: "/tutorials/lib/",
            },
          ],
        },
        {
          label: "Syntax",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Basic", link: "/guides/basic/" },
            { label: "Function", link: "/guides/function/" },
            { label: "Control Structures", link: "/guides/control/" },
            { label: "Data Structures", link: "/guides/data-structures/" },
            { label: "Trait", link: "/guides/trait/" },
            { label: "Build System", link: "/guides/build-system/" },
          ],
        },
        {
          label: "Core lib（Built-ins）",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "core lib array", link: "/guides/example/" },
            { label: "core lib array", link: "/guides/example/" },
            { label: "core lib array", link: "/guides/example/" },
            { label: "core lib array", link: "/guides/example/" },
          ],
        },
        {
          label: "Integrations",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "build", link: "/integrations/build/" },
            { label: "test", link: "/integrations/test/" },
            { label: "ffi", link: "/integrations/ffi/" },
            { label: "package manager", link: "/integrations/package/" },
          ],
        },
        {
          label: "Recipes",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "migrate-rust-to-moonbit",
              link: "/recipes/migrate-from-rust/",
            },
            {
              label: "migrate-ts-to-moonbit",
              link: "/recipes/migrate-from-ts/",
            },
          ],
        },
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", link: "/guides/example/" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
