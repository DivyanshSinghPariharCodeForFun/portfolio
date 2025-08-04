"use client";

import { DownloadIcon, TriangleDashedIcon } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";

import { copyText } from "@/utils/copy";

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "./ui/context-menu";

export function BrandContextMenu({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useTheme();

  return (
    <ContextMenu>
      <ContextMenuTrigger asChild>{children}</ContextMenuTrigger>

      <ContextMenuContent className="w-64">
        <ContextMenuItem asChild>
          <a
            href="https://drive.google.com/file/d/13lbW-DFA-IZDFmMX9GdQ85m6HXATTt0y/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DownloadIcon />
            Download Resume
          </a>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
