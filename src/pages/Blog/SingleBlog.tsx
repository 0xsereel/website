import { Footer } from "../../components/Footer/Footer"
import { Header } from "../../components/Header/Header"
import { MobileMenu } from "../../components/Header/MobileMenu"
import { BlogPost } from "../../components/Blog/BlogPost"

export const SingleBlog = () => {

  return (
    <div className="w-full">
        <Header />
        <MobileMenu />
        <BlogPost />


        <Footer />
    </div>
  )
}
