import { FiImage } from "react-icons/fi";

export interface PostProps{
    id:string;
    email:string;
    content:string;
    createAt:string;
    uid:string;
}

const posts: PostProps[]=[
    {
        id:"1",
        email:"test@test.com",
        content:"내용",
        createAt:"2025-02-25",
        uid:"123123"
    },
    {
        id:"2",
        email:"test@test.com",
        content:"내용",
        createAt:"2025-02-25",
        uid:"123123"
    },
    {
        id:"3",
        email:"test@test.com",
        content:"내용",
        createAt:"2025-02-25",
        uid:"123123"
    },
    {
        id:"4",
        email:"test@test.com",
        content:"내용",
        createAt:"2025-02-25",
        uid:"123123"
    },
    {
        id:"5",
        email:"test@test.com",
        content:"내용",
        createAt:"2025-02-25",
        uid:"123123"
    },
    {
        id:"6",
        email:"test@test.com",
        content:"내용",
        createAt:"2025-02-25",
        uid:"123123"
    },
]

export default function HomePage(){
    const handleFileUpload =()=>{

    }
    return (
        <div className="home">
            <div className="home_title">Home</div>
            <div className="home_tabs">
                <div className="home_tab home_tab--active">For you</div>
                <div className="home_tab ">Following</div>
            </div>
            <form className="post-form">
                <textarea className="post-form_textarea" required name="content" id="content" placeholder="enter everything"/>
                <div className="post-form_submit-area">
                <label htmlFor="file-input" className="post-form_file">
                    <FiImage className="post-form_file-icon" />
                </label>
                    <input type="file" name="file-input" accept="image/*" onChange={handleFileUpload}></input>
                </div>
            </form>
        </div>
    )
}