# ๐จโ๐ป 2023๋๋ KOSS ๋๊ณ ๋ฐฑ์๋ ์คํฐ๋
๊ตญ๋ฏผ๋ํ๊ต ์ํํธ์จ์ด์ตํฉ๋ํ ์คํ์์ค์ํํธ์จ์ด ๋์๋ฆฌ ์ฝ์ค์ 2023๋๋ ๋๊ณ ๋ฐฑ์๋ ์คํฐ๋์๋๋ค.

## ๐ ๊ฐ์
- ๊ธฐ๊ฐ : 2023๋ 1์ ~ 2์
- ๋ชฉํ : ๋ฐฑ์๋์ ๋ํ ๊ธฐ์ด๋ฅผ ๋ค์ง๊ณ , ํ๋ก์ ํธ๋ฅผ ์งํํ๋ฉฐ ๊ณต๋ชจ์ ์ ๋๋นํ๋ค.

## โ๏ธ ์งํ๋ฐฉ์
1. ์คํฐ๋์์ ์ ํด์ค ๋ถ๋ถ๊น์ง ๊ฐ์์๋ฃ๋ฅผ ์ฐธ๊ณ ํ์ฌ ๊ณต๋ถํ๋ค
2. ๊ณต๋ถํ๋์ค ๋ชฐ๋๋ ๋ถ๋ถ์ด๋ ์ด๋ ค์ ๋ ๋ถ๋ถ์ด ์์ผ๋ฉด ์ ๋ฆฌํ์ฌ ๋ธ์์ด๋ README๋ฅผ ์์ฑํ์ฌ ์ฌ๋ฆฐ๋ค.
3. ์คํฐ๋์์ ์ ํด์ค ๋ถ๋ถ๊น์ง์ ๊ณผ์  ๋ํ ํจ๊ป ํ์ด๋ณด๊ณ , ํด๋น Repository์ ์ฌ๋ฆฐ๋ค.

## ๐ง Git Convention
Git Convention์ ๋ฐ๋ผ ํด๋น Repository์ ๊ณผ์ ์ ๊ณต๋ถํ๋ฉด์ ๋ง๋ค์๋ ์์ ๋ค์ ์ฌ๋ฆฌ๋ฉฐ GitHub์ผ๋ก ํ์ํ์ฌ ํ๋ก์ ํธ๋ฅผ ํ๋ ๋ฒ์ ๋ํด ๊ณต๋ถํด๋ณธ๋ค.

1. ์์ ์ฝ๋๋ฅผ ์ฌ๋ฆฌ๊ฑฐ๋ ๊ณผ์ ๋ฅผ ์ฌ๋ฆด ๋ ์์ ์ ์ด๋ฆ์ด ๋ค์ด๊ฐ Branch์ commit์ ํ๋ค.
    ```
    # Git Commit Format
    :gitmogi:[turn][category] Commit Message #issueNumber

    # Example
   :art:[2์ฃผ์ฐจ][Refactor] ์ฝ๋ ๋ฆฌํํ ๋ง #12 
    ```
2. ๊ณผ์  ๊ธฐํ์ ๋ง์ถ์ด ์์ ์ Branch๋ฅผ Main Branch์ Pull Requestํ๋ค.
    ```
    # Git Pull Request Format
    - [ ] #parentIssueNumber
    - [ ] #childIssueNumber
    resolved #childIssueNumber

    # Example(์ฌ๊ธฐ์ #4 ์ด์๋ ์ ์ฒด ๊ณผ์  ์ด์๋ฉฐ #6 ์ด์๋ ์์  ๊ฐ์ธ ์ด์๋ก ํ ๋น๋ ๊ณผ์  ์ด์์๋๋ค.)
    - [ ] #4
    - [ ] #6
    resolved #6
    ```
3. ๋ค์ด์จ Pull Request๋ ๋ฆฌ๋ฉํ๋ ์ฌ๋(@ymw0407) ๋ฐ ๋ค๋ฅธ ํ์๋ค์ด ํจ๊ป Code Review๋ฅผ ์งํํ๊ฒ ๋  ๊ฒ์๋๋ค. ํด๋น ๋ถ๋ถ์ ๋ํด ํ์ธํ์ฌ ์ฃผ์ธ์! (_๋ง์ Code Review ๋ถํ๋๋ฆฝ๋๋ค._)

### ๐ค Gitmogi & Git Commit convention
| Icon | Code | Category | Description | 
| ------------- | ------------- | ------------- | ------------- |
| โป๏ธ | recycle | Refactor | ์ฝ๋ ๋ฆฌํํ ๋ง |
| โก๏ธ | zap | Perfom | ์ฑ๋ฅ ๊ฐ์  |
| ๐ฅ | fire | Remove | ์ฝ๋/ํ์ผ ์ญ์  |
| ๐ | bug | Fix | ๋ฒ๊ทธ ์์  |
| โจ | sparkles | Feat | ์๋ก์ด ๊ธฐ๋ฅ ์ถ๊ฐ |
| ๐ | memo | Document | ๋ฌธ์ ์ถ๊ฐ/์์ (README.md) |
| ๐ | tada | first commit | ํ๋ก์ ํธ ์์ |
| ๐ก | 	bulb | Comment | ์ฃผ์ ์ถ๊ฐ/์์  |

## ๐ ์คํฐ๋ ๊ตฌ์ฑ์

<table>
    <tr>
        <td align="center"><a href="https://github.com/ymw0407"><img src="https://avatars.githubusercontent.com/u/77202633?v=4" width="100px;" alt=""/><br /><sub><b>์ค๋ฏผ์ฐ</b></sub></a><br /><a href="https://github.com/ymw0407" title="Code">๐ป</a></td>
        <td align="center"><a href="https://github.com/hummingbbird"><img src="https://avatars.githubusercontent.com/u/84303489?v=4" width="100px;" alt=""/><br /><sub><b>์ด์ฑ์</b></sub></a><br /><a href="https://github.com/hummingbbird" title="Code">๐ป</a></td>
        <td align="center"><a href="https://github.com/ancy0"><img src="https://avatars.githubusercontent.com/u/84322890?v=4" width="100px;" alt=""/><br /><sub><b>์์ฑ์</b></sub></a><br /><a href="https://github.com/ancy0" title="Code">๐ป</a></td>
        <td align="center"><a href="https://github.com/Eonji-sw"><img src="https://avatars.githubusercontent.com/u/85453429?v=4" width="100px;" alt=""/><br /><sub><b>๊น์ธ์ง</b></sub></a><br /><a href="https://github.com/Eonji-sw" title="Code">๐ป</a></td>
        <td align="center"><a href="https://github.com/gyur2"><img src="https://avatars.githubusercontent.com/u/66067610?v=4" width="100px;" alt=""/><br /><sub><b>๊น๊ท๋ฆฌ</b></sub></a><br /><a href="https://github.com/gyur2" title="Code">๐ป</a></td>
        <td align="center"><a href="https://github.com/wjdtnghks123"><img src="https://avatars.githubusercontent.com/u/54920289?v=4" width="100px;" alt=""/><br /><sub><b>์ ์ํ</b></sub></a><br /><a href="https://github.com/wjdtnghks123" title="Code">๐ป</a></td>
    </tr>
</table>
