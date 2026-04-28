import ClientNavbar from "./ClientNavbar";

function ClientLayout({ children }) {
  return (
    <>
      <ClientNavbar />
      <main>{children}</main>

      <footer className="footer">
        <p>© 2026 Mehr Shop</p>
      </footer>
    </>
  );
}

export default ClientLayout;