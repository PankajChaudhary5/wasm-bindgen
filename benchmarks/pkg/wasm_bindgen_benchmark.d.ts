/* tslint:disable */
/* eslint-disable */
/**
* @param {number} n
*/
export function call_js_thunk_n_times(n: number): void;
/**
* @param {number} n
* @param {number} a
* @param {number} b
*/
export function call_js_add_n_times(n: number, a: number, b: number): void;
/**
*/
export function thunk(): void;
/**
* @param {number} a
* @param {number} b
* @returns {number}
*/
export function add(a: number, b: number): number;
/**
* @param {number} n
* @returns {number}
*/
export function fibonacci(n: number): number;
/**
* @returns {number}
*/
export function fibonacci_high(): number;
/**
* @param {number} n
* @param {any} foo
*/
export function call_foo_bar_final_n_times(n: number, foo: any): void;
/**
* @param {number} n
* @param {any} foo
*/
export function call_foo_bar_structural_n_times(n: number, foo: any): void;
/**
* @param {number} n
*/
export function call_doesnt_throw_n_times(n: number): void;
/**
* @param {number} n
*/
export function call_doesnt_throw_with_catch_n_times(n: number): void;
/**
* @param {number} n
* @param {any} element
*/
export function call_first_child_final_n_times(n: number, element: any): void;
/**
* @param {number} n
* @param {any} element
*/
export function call_first_child_structural_n_times(n: number, element: any): void;
/**
* @param {number} n
* @param {any[]} elements
*/
export function call_node_first_child_n_times(n: number, elements: any[]): void;
/**
* @param {number} n
* @param {any[]} elements
*/
export function call_node_node_type_n_times(n: number, elements: any[]): void;
/**
* @param {number} n
* @param {any[]} elements
*/
export function call_node_has_child_nodes_n_times(n: number, elements: any[]): void;
/**
* @param {Node} element
*/
export function count_node_types(element: Node): void;
/**
* @param {string} s
* @returns {string}
*/
export function str_roundtrip(s: string): string;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly call_js_thunk_n_times: (a: number) => void;
  readonly call_js_add_n_times: (a: number, b: number, c: number) => void;
  readonly thunk: () => void;
  readonly add: (a: number, b: number) => number;
  readonly fibonacci: (a: number) => number;
  readonly fibonacci_high: () => number;
  readonly call_foo_bar_final_n_times: (a: number, b: number) => void;
  readonly call_foo_bar_structural_n_times: (a: number, b: number) => void;
  readonly call_doesnt_throw_n_times: (a: number) => void;
  readonly call_doesnt_throw_with_catch_n_times: (a: number) => void;
  readonly call_first_child_final_n_times: (a: number, b: number) => void;
  readonly call_first_child_structural_n_times: (a: number, b: number) => void;
  readonly call_node_first_child_n_times: (a: number, b: number, c: number) => void;
  readonly call_node_node_type_n_times: (a: number, b: number, c: number) => void;
  readonly call_node_has_child_nodes_n_times: (a: number, b: number, c: number) => void;
  readonly count_node_types: (a: number) => void;
  readonly str_roundtrip: (a: number, b: number, c: number) => void;
  readonly __wbindgen_exn_store: (a: number) => void;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
  readonly __wbindgen_free: (a: number, b: number) => void;
}

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
        