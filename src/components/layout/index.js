import Header from "../header"
import Main from "../main"
import Footer from "../footer"
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Main children={children}></Main>
      <Footer />
    </>
  )
}

export default Layout
