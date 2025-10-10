import { Outlet, useNavigation } from "react-router";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="relative">
      <Navbar />

      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-white/70 backdrop-blur-sm z-50">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      )}

      <div className="min-h-[calc(100vh-216px)]">
        <Outlet />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
