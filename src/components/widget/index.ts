const modules = import.meta.glob('./*.vue', { eager: true, import: 'default' })

export default {
  install(app: any) {
    console.log(modules)
    for (const path in modules) {
      let cname = modules[path].default.name
      app.component(cname, modules[path].default)
    }
  }
}