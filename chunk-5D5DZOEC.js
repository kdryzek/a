import{a as r}from"./chunk-2AQUQJK4.js";import"./chunk-5HQAOZDH.js";import"./chunk-MS7IIVW6.js";import{ea as e}from"./chunk-GQ4PCDYO.js";import"./chunk-C6Q5SG76.js";var o=t=>e(r).getById(t.paramMap.get("id"));var a=[{path:"list",loadComponent:()=>import("./chunk-6XMAPLZB.js").then(t=>t.ListComponent)},{path:"create",loadComponent:()=>import("./chunk-V7BHP5IL.js").then(t=>t.CreateComponent)},{path:":id/edit",loadComponent:()=>import("./chunk-IT74T6QJ.js").then(t=>t.EditComponent),resolve:{item:o}},{path:":id",loadComponent:()=>import("./chunk-3KL6CIZD.js").then(t=>t.ItemComponent),resolve:{item:o}}];export{a as routes};