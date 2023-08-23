import MainNav from "@/components/layout/main-nav";

function Layout({ children }) {
  return (
      <>
        <MainNav />
        <main>
          { children }
        </main>
      </>
  )
}

export default Layout;