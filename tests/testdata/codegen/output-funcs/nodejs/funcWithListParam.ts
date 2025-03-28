// *** WARNING: this file was generated by test. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

/**
 * Check codegen of functions with a List parameter.
 */
export function funcWithListParam(args?: FuncWithListParamArgs, opts?: pulumi.InvokeOptions): Promise<FuncWithListParamResult> {
    args = args || {};
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invoke("mypkg::funcWithListParam", {
        "a": args.a,
        "b": args.b,
    }, opts);
}

export interface FuncWithListParamArgs {
    a?: string[];
    b?: string;
}

export interface FuncWithListParamResult {
    readonly r: string;
}
/**
 * Check codegen of functions with a List parameter.
 */
export function funcWithListParamOutput(args?: FuncWithListParamOutputArgs, opts?: pulumi.InvokeOutputOptions): pulumi.Output<FuncWithListParamResult> {
    args = args || {};
    opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts || {});
    return pulumi.runtime.invokeOutput("mypkg::funcWithListParam", {
        "a": args.a,
        "b": args.b,
    }, opts);
}

export interface FuncWithListParamOutputArgs {
    a?: pulumi.Input<pulumi.Input<string>[]>;
    b?: pulumi.Input<string>;
}
