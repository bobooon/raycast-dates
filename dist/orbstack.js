"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/orbstack.tsx
var orbstack_exports = {};
__export(orbstack_exports, {
  default: () => Orbstack
});
module.exports = __toCommonJS(orbstack_exports);
var import_promises = require("node:fs/promises");
var import_node_os = require("node:os");
var import_node_path = __toESM(require("node:path"));
var import_api = require("@raycast/api");
var import_react = require("react");
var import_jsx_runtime = require("react/jsx-runtime");
function Orbstack() {
  const [name, setName] = (0, import_react.useState)(false);
  (0, import_react.useEffect)(() => {
    (async () => {
      try {
        setName(import_node_path.default.basename(JSON.parse(await (0, import_promises.readFile)(`${(0, import_node_os.homedir)()}/.orbstack/vmconfig.json`, "utf8")).data_dir));
      } catch {
        setName("Default");
      }
    })();
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_api.MenuBarExtra, { isLoading: !name, title: name || "" });
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vLi4vLi4vVm9sdW1lcy9EYXRhL2ZvdW5kYXRpb25zL3BsdWdpbnMvd2luZ21hbi9zcmMvb3Jic3RhY2sudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyByZWFkRmlsZSB9IGZyb20gJ25vZGU6ZnMvcHJvbWlzZXMnXG5pbXBvcnQgeyBob21lZGlyIH0gZnJvbSAnbm9kZTpvcydcbmltcG9ydCBwYXRoIGZyb20gJ25vZGU6cGF0aCdcbmltcG9ydCB7IE1lbnVCYXJFeHRyYSB9IGZyb20gJ0ByYXljYXN0L2FwaSdcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gT3Jic3RhY2soKSB7XG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlPHN0cmluZyB8IGZhbHNlPihmYWxzZSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIChhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBzZXROYW1lKHBhdGguYmFzZW5hbWUoSlNPTi5wYXJzZShhd2FpdCByZWFkRmlsZShgJHtob21lZGlyKCl9Ly5vcmJzdGFjay92bWNvbmZpZy5qc29uYCwgJ3V0ZjgnKSkuZGF0YV9kaXIpKVxuICAgICAgfVxuICAgICAgY2F0Y2gge1xuICAgICAgICBzZXROYW1lKCdEZWZhdWx0JylcbiAgICAgIH1cbiAgICB9KSgpXG4gIH0sIFtdKVxuXG4gIHJldHVybiA8TWVudUJhckV4dHJhIGlzTG9hZGluZz17IW5hbWV9IHRpdGxlPXtuYW1lIHx8ICcnfT48L01lbnVCYXJFeHRyYT5cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFBeUI7QUFDekIscUJBQXdCO0FBQ3hCLHVCQUFpQjtBQUNqQixpQkFBNkI7QUFDN0IsbUJBQW9DO0FBZ0IzQjtBQWRNLFNBQVIsV0FBNEI7QUFDakMsUUFBTSxDQUFDLE1BQU0sT0FBTyxRQUFJLHVCQUF5QixLQUFLO0FBRXRELDhCQUFVLE1BQU07QUFDZCxLQUFDLFlBQVk7QUFDWCxVQUFJO0FBQ0YsZ0JBQVEsaUJBQUFBLFFBQUssU0FBUyxLQUFLLE1BQU0sVUFBTSwwQkFBUyxPQUFHLHdCQUFRLENBQUMsNEJBQTRCLE1BQU0sQ0FBQyxFQUFFLFFBQVEsQ0FBQztBQUFBLE1BQzVHLFFBQ007QUFDSixnQkFBUSxTQUFTO0FBQUEsTUFDbkI7QUFBQSxJQUNGLEdBQUc7QUFBQSxFQUNMLEdBQUcsQ0FBQyxDQUFDO0FBRUwsU0FBTyw0Q0FBQywyQkFBYSxXQUFXLENBQUMsTUFBTSxPQUFPLFFBQVEsSUFBSTtBQUM1RDsiLAogICJuYW1lcyI6IFsicGF0aCJdCn0K
