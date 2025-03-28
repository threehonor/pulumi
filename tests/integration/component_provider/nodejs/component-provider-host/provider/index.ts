// Copyright 2025-2025, Pulumi Corporation.  All rights reserved.

import { componentProviderHost } from "@pulumi/pulumi/provider/experimental";
import { MyComponent } from "./component";

componentProviderHost({ components: [MyComponent]});
