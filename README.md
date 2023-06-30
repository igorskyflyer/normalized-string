# normalized-string

💊 NormalizedString provides you with a String type with consistent line-endings, guaranteed. 📮

<br>

<div align="center">
<h3>💖 Support further development</h3>
<a href="https://ko-fi.com/igorskyflyer" target="_blank"><img src="https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/ko-fi.png" alt="Donate to igorskyflyer" width="108"></a>
</div>

<br>
<br>
<br>

## 🕵🏼‍♂️ Usage

Install it by executing:

```shell
npm i "@igor.dvlpr/normalized-string"
```

<br>

## 🤹🏼‍♂️ API

```ts
constructor(value: string, endings: LineEndings = LineEnding.lf)
```

`value` - A string to work with.

`endings` - The line endings to use:

- `LineEnding.lf` - UNIX-like line endings (line feed),

- `LineEnding.crlf` - Windows line endings (carriage return + line feed).
