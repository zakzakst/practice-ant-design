'use client'

import { useRef } from "react";
import FullCalendar from '@fullcalendar/react'
import type { CalendarApi } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'
import styles from './styles.module.css'
import jaLocale from "@fullcalendar/core/locales/ja";

const Page = () => {
  const calendarRef = useRef<FullCalendar | null>(null);

  const handlePrev = () => {
    const api: CalendarApi | undefined = calendarRef.current?.getApi();
    api?.prev();
  };

  const handleNext = () => {
    const api: CalendarApi | undefined = calendarRef.current?.getApi();
    api?.next();
  };

  // const handleToday = () => {
  //   const api: CalendarApi | undefined = calendarRef.current?.getApi();
  //   api?.today();
  // };

  return <div className={styles.module}>
    <div>
      <div className="flex items-center gap-2 mb-4">
        <button
          onClick={handlePrev}
          className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300"
        >
          ◀ 前へ
        </button>
        {/* <button
          onClick={handleToday}
          className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300"
        >
          今日
        </button> */}
        <button
          onClick={handleNext}
          className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300"
        >
          次へ ▶
        </button>
      </div>
    </div>
    <FullCalendar
      ref={calendarRef}
      plugins={[ dayGridPlugin ]}
      initialView="dayGridMonth"
      events={[
        { title: 'event 1', date: '2025-09-01' },
        { title: 'event 2', start: '2025-09-02', end: '2025-09-10' }
      ]}
      height='auto'
      eventContent={(arg) => {
        return (
          <div className="bg-indigo-500 text-white rounded px-2 py-1 text-xs">
            <span className="font-bold">{arg.event.title}</span>
          </div>
        );
      }}
      dayCellContent={(arg) => {
        // arg.date: 日付の Date オブジェクト
        // arg.dayNumberText: デフォルトの数字 (例: "5")
        return (
          <div className="flex flex-col items-center">
            <div>hogehoge</div>
            <span className="text-xs text-gray-500">{arg.dayNumberText}</span>
          </div>
        );
      }}
      themeSystem={""}
      // headerToolbar={{
      //   left: "",
      //   center: "",
      //   right: "prev,next",
      // }}
      headerToolbar={false}
      locales={[jaLocale]}
      locale="ja"
    />
  </div>
}

export default Page