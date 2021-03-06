---
sidebar: auto
meta:
 - name: keywords
   description: api typescript node.js documentation SendResponseMiddleware class
---
# SendResponseMiddleware <Badge text="Class" type="class"/>
<!-- Summary -->
<section class="symbol-info"><table class="is-full-width"><tbody><tr><th>Module</th><td><div class="lang-typescript"><span class="token keyword">import</span> { SendResponseMiddleware }&nbsp;<span class="token keyword">from</span>&nbsp;<span class="token string">"@tsed/common"</span></div></td></tr><tr><th>Source</th><td><a href="https://github.com/TypedProject/ts-express-decorators/blob/v5.18.0/packages/common/src/mvc/components/SendResponseMiddleware.ts#L0-L0">/packages/common/src/mvc/components/SendResponseMiddleware.ts</a></td></tr></tbody></table></section>

<!-- Overview -->
## Overview


<pre><code class="typescript-lang "><span class="token keyword">class</span> SendResponseMiddleware <span class="token keyword">implements</span> <a href="/api/common/mvc/interfaces/IMiddleware.html"><span class="token">IMiddleware</span></a> <span class="token punctuation">{</span>
    <span class="token keyword">protected</span> converterService<span class="token punctuation">:</span> <a href="/api/common/converters/services/ConverterService.html"><span class="token">ConverterService</span></a><span class="token punctuation">;</span>
    <span class="token keyword">constructor</span><span class="token punctuation">(</span>converterService<span class="token punctuation">:</span> <a href="/api/common/converters/services/ConverterService.html"><span class="token">ConverterService</span></a><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">use</span><span class="token punctuation">(</span>data<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">,</span> response<span class="token punctuation">:</span> <a href="/api/common/filters/decorators/Res.html"><span class="token">Res</span></a><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">import</span><span class="token punctuation">(</span>"express-serve-<span class="token keyword">static</span>-core"<span class="token punctuation">)</span>.<a href="/api/common/filters/decorators/Response.html"><span class="token">Response</span></a><span class="token punctuation">;</span>
<span class="token punctuation">}</span></code></pre>



<!-- Description -->
## Description

::: v-pre

See example to override SendResponseMiddleware [here](/docs/middlewares/override/send-response.md).

:::


<!-- Members -->




## Members


::: v-pre

<div class="method-overview">
<pre><code class="typescript-lang "><span class="token keyword">protected</span> converterService<span class="token punctuation">:</span> <a href="/api/common/converters/services/ConverterService.html"><span class="token">ConverterService</span></a></code></pre>

</div>



:::



***



::: v-pre

<div class="method-overview">
<pre><code class="typescript-lang "><span class="token function">use</span><span class="token punctuation">(</span>data<span class="token punctuation">:</span> <span class="token keyword">any</span><span class="token punctuation">,</span> response<span class="token punctuation">:</span> <a href="/api/common/filters/decorators/Res.html"><span class="token">Res</span></a><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword">import</span><span class="token punctuation">(</span>"express-serve-<span class="token keyword">static</span>-core"<span class="token punctuation">)</span>.<a href="/api/common/filters/decorators/Response.html"><span class="token">Response</span></a></code></pre>

</div>



:::