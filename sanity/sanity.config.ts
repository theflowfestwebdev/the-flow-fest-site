import {defineConfig} from "sanity";
import {deskTool} from "sanity/desk";
import {schemaTypes} from "./schemas";

export default defineConfig({
  name: "default",
  title: "The Flow Website",
  projectId: "your-project-id", // You'll need to replace this with your actual project ID
  dataset: "production",
  basePath: "/studio",
  plugins: [deskTool()],
  schema: {
    types: schemaTypes,
  },
});
