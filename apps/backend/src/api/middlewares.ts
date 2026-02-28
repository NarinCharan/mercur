import { defineMiddlewares } from "@medusajs/medusa"

export default defineMiddlewares({
  routes: [
    {
      matcher: "/admin/stores/*",
      bodyParser: { sizeLimit: "10mb" },
    },
  ],
})
