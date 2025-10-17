import React, { useState } from 'react';
import { Lesson } from './types';
import { LESSONS } from './constants';
import LessonCard from './components/LessonCard';
import LessonDetail from './components/LessonDetail';

const App: React.FC = () => {
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);

  const handleSelectLesson = (lesson: Lesson) => {
    setSelectedLesson(lesson);
    window.scrollTo(0, 0);
  };

  const handleBackToList = () => {
    setSelectedLesson(null);
  };

  return (
    <div className="min-h-screen text-slate-800 dark:text-slate-200 transition-colors duration-500">
      <main className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600 md:leading-tight">
            Lý Thuyết Học Vẽ
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            Hành trình của bạn để trở thành một họa sĩ.
          </p>
        </header>
        
        {selectedLesson ? (
          <div className="max-w-3xl mx-auto">
            <LessonDetail lesson={selectedLesson} onBack={handleBackToList} />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {LESSONS.map((lesson) => (
              <LessonCard key={lesson.id} lesson={lesson} onSelect={handleSelectLesson} />
            ))}
          </div>
        )}

        <footer className="text-center mt-16 text-slate-500 dark:text-slate-500">
          <p className="text-sm">Phát triển bởi Nguyễn Thành Đạt</p>
        </footer>
      </main>
    </div>
  );
};

export default App;