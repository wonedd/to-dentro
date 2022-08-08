import { css, Global } from '@emotion/react';

export const globalStyles = (
    <Global
        styles={css`
            html,
            body {
                box-sizing: border-box;
                padding: 0;
                margin: 0;
                background: #111111;
                min-height: 100%;
                font-family: 'Roboto', sans-serif;
                font-size: 16px;
                color: #f7f7f7;
                line-height: 200%;
            }

            :root {
                --white: #f7f7f7;
                --primaryGray: #222222;
                --gray: #999292;
                --menuHover: rgba(0, 179, 126, 0.2);
                --green: #00b37e;
            }

            @keyframes loading {
                to {
                    transform: rotate(1turn);
                }
            }
        `}
    />
);
