import { useState, useRef, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";

export const TopBar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isQuizPage = location.pathname.startsWith("/quiz");

  const { user, logout } = useAuth();
  const displayName = user?.username ?? "Explorador";

  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Cerrar el menú si se hace click fuera
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <header
      className="
        h-20
        px-6
        flex
        items-center
        bg-gradient-to-b
        from-[var(--topbar-from)]
        to-[var(--topbar-to)]
        backdrop-blur
        border-b border-white/10
      "
    >
      {/* IZQUIERDA - LOGO / HOME */}
      <button
        onClick={() => navigate("/collection")}
        className="
          flex items-center gap-3 w-[220px] justify-end
          cursor-pointer
          hover:opacity-80
          transition
        "
      >
        <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden">
          <img
            src="/image/logo/CartaSinFondoBg-blanco.ico"
            alt="WildDeck logo"
            className="h-80 w-80 object-contain"
          />
        </div>

        <span className="text-xl font-semibold tracking-wide text-white">
          WildDeck
        </span>
      </button>

      <button
        className="md:hidden h-10 w-10 rounded-full bg-accent flex items-center justify-center text-white mr-2"
        onClick={() => {
          // aquí luego conectamos el sidebar
          console.log("Abrir filtros");
        }}
      >
        ☰
      </button>

      <div className="flex-1 flex justify-center">
        <button
          onClick={() => {
            if (!isQuizPage) navigate("/quiz");
          }}
          disabled={isQuizPage}
          className={`
    px-6 md:px-10 py-2 md:py-3
    rounded-full
    font-bold
    text-base md:text-lg
    transition
    ${
      isQuizPage
        ? "bg-gray-500/60 text-gray-200 cursor-not-allowed shadow-none"
        : "bg-[var(--accent-orange)] text-white shadow-lg hover:shadow-xl hover:bg-[var(--accent-orange-hover)] active:scale-[0.97]"
    }
  `}
        >
          Jugar
        </button>
      </div>

      {/* DERECHA - PERFIL */}
      <div
        className="relative flex items-center gap-3 md:gap-5 md:w-[220px] justify-start"
        ref={menuRef}
      >
        {/* NIVEL */}
        <div className="hidden md:flex items-center gap-1 text-sm">
          <span className="text-yellow-300 text-lg">★</span>
          <span className="font-semibold text-white">1</span>
        </div>

        {/* PERFIL */}
        <button
          className="flex items-center gap-2 hover:opacity-80 transition"
          onClick={() => navigate("/UserProfile")}
        >
          <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center text-white font-semibold text-lg">
            {displayName[0]?.toUpperCase()}
          </div>

          <div className="hidden sm:flex flex-col leading-tight text-left">
            <span className="text-sm text-white font-medium">
              {displayName}
            </span>
            <span className="text-xs text-text-muted">Usuario</span>
          </div>
        </button>

        {open && (
          <div className="absolute right-0 top-16 w-44 bg-white border shadow-xl rounded-xl p-2 flex flex-col z-50">
            <button
              onClick={logout}
              className="
                w-full text-left px-3 py-2 rounded-md text-sm
                bg-white text-black hover:bg-gray-200 transition
              "
            >
              Cerrar sesión
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
