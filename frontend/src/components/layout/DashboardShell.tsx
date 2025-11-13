import SideBar from "../SideBar";
import TopBar from "../TopBar";
import RecommendedSection from "../books/RecommendedSection";
import CategoriesSection from "../books/CategoriesSection";
import BookDetailPanel from "../books/BookDetailPanel";
import { useState } from "react";
import type { Book } from "../../types/book";

export default function DashboardShell() {
  //const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center">
      <div className="w-[1200px] h-[700px] rounded-3xl bg-white shadow-lg overflow-hidden grid grid-cols-[260px, 1fr,320px]">
        <SideBar />
        <div className="flex flex-col">
          <TopBar />
          <main className="flex-1 overflow-y-auto p-6 space-y-8">
            <RecommendedSection /* onSelectBook={setSelectedBook} */ />
            <CategoriesSection /* onSelectBook={setSelectedBook} */ />
          </main>
        </div>
        <BookDetailPanel
        /* book={selectedBook}
          onClose={() => setSelectedBook(nul l)}*/
        />
      </div>
    </div>
  );
}
