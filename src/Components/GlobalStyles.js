import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
    }
    body{
        /* font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */
        display:flex;
        justify-content:center;
        align-items:center;
        height:100vh;
        background: linear-gradient( 30deg, rgb(255, 255, 255), rgb(210, 209, 212) );
        -ms-user-select: none; 
        -moz-user-select: -moz-none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        user-select: none;
    }

    input[type="submit"]{
        font-size: 20px;
        font-weight: 600;
        color: rgba(0, 0, 0, 0.7);
        width: 80px;
        height: 35px;
        border-radius: 30px;
        border: 2px solid rgba(0, 0, 0, 0.3);
        background-color: white;
        justify-content: center;
        align-items: center;
        box-shadow: inset -6px -6px 15px rgba(145, 160, 180, 0.1),
        30px 30px 40px rgba(118, 146, 180, 0.1);
        margin:0 5px
    }



    
    #root div {
    }
         
`;

export default globalStyles;
