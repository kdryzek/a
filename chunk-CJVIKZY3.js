import{a as r}from"./chunk-H7BB3AXK.js";import"./chunk-VP4NJKEN.js";import"./chunk-MS7IIVW6.js";import{ea as e}from"./chunk-GQ4PCDYO.js";import"./chunk-C6Q5SG76.js";var o=t=>e(r).getById(t.paramMap.get("id"));var a=[{path:"list",loadComponent:()=>import("./chunk-RJABOUWL.js").then(t=>t.ListComponent)},{path:"create",loadComponent:()=>import("./chunk-WT7C3CWY.js").then(t=>t.CreateComponent)},{path:":id/edit",loadComponent:()=>import("./chunk-O4AZEZDT.js").then(t=>t.EditComponent),resolve:{item:o}},{path:":id",loadComponent:()=>import("./chunk-3KL6CIZD.js").then(t=>t.ItemComponent),resolve:{item:o}}];export{a as routes};