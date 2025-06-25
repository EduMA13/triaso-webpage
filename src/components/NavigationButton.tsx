"use client";
import React from "react";
import Link from "next/link";

type NavigationButtonProps = {
  text: string;
  href?: string; // para navegación interna o externa
  downloadUrl?: string; // para descargar PDF
  onClick?: () => void; // para ejecutar una acción personalizada
};

export default function NavigationButton({
  text,
  href,
  downloadUrl,
  onClick,
}: NavigationButtonProps) {
  const handleClick = () => {
    if (downloadUrl) {
      // Crear un enlace temporal para descargar el archivo
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = downloadUrl.split("/").pop() || "Catalogo.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else if (onClick) {
      onClick();
    }
  };

  if (href) {
    return (
      <Link href={href}>
        <button className="bg-[#A0110C] hover:bg-red-700 text-white font-semibold py-2 px-4 w-[250px] h-[50px] rounded-md">
          {text}
        </button>
      </Link>
    );
  }

  return (
    <button
      className="bg-[#A0110C] hover:bg-red-700 text-white font-semibold py-2 px-4 w-[250px] h-[50px] rounded-md"
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
