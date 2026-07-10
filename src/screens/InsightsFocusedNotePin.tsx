// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Insights - Focused Note Pin
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { BadgeHelp, BarChart3, Download, Lightbulb, ListFilter, ListTodo, Minus, Pencil, Plus, Settings, TrendingUp, Wifi } from "lucide-react";


export type InsightsFocusedNotePinActionId = "create-record-1" | "filter-2" | "export-summary-3" | "review-now-4" | "operations-1" | "insights-2" | "settings-3" | "operations-4" | "insights-5" | "settings-6";

export interface InsightsFocusedNotePinProps {
  actions?: Partial<Record<InsightsFocusedNotePinActionId, () => void>>;

}

export function InsightsFocusedNotePin({ actions }: InsightsFocusedNotePinProps) {
  return (
    <>
      {/* SideNavBar (Desktop) */}
      <nav className="hidden md:flex flex-col pt-20 pb-md px-sm z-40 bg-surface dark:bg-inverse-surface border-r border-outline-variant dark:border-outline-variant fixed left-0 top-0 h-full w-64">
      <div className="mb-lg px-sm">
      <h1 className="font-headline-md text-headline-md font-bold text-on-surface dark:text-inverse-on-surface">Focused Note Pin</h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">Professional Edition</p>
      </div>
      <div className="flex-1 space-y-sm">
      <a className="flex items-center gap-md px-md py-sm text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-container-highest rounded-full transition-colors cursor-pointer active:opacity-80" href="#" data-action-id="operations-1" onClick={(event) => { event.preventDefault(); actions?.["operations-1"]?.(); }}>
      <ListTodo aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Operations</span>
      </a>
      <a className="flex items-center gap-md px-md py-sm bg-secondary-fixed dark:bg-on-secondary-fixed-variant text-on-secondary-fixed dark:text-secondary-fixed rounded-full hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-colors cursor-pointer active:opacity-80" href="#" data-action-id="insights-2" onClick={(event) => { event.preventDefault(); actions?.["insights-2"]?.(); }}>
      <BarChart3  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Insights</span>
      </a>
      <a className="flex items-center gap-md px-md py-sm text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-container-highest rounded-full transition-colors cursor-pointer active:opacity-80" href="#" data-action-id="settings-3" onClick={(event) => { event.preventDefault(); actions?.["settings-3"]?.(); }}>
      <Settings aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Settings</span>
      </a>
      </div>
      <button className="mt-auto w-full bg-primary text-on-primary font-label-md text-label-md py-sm rounded-full hover:bg-on-primary-fixed-variant transition-colors flex justify-center items-center gap-sm" type="button" data-action-id="create-record-1" onClick={actions?.["create-record-1"]}>
      <Plus className="text-[18px]" aria-hidden={true} focusable="false" />
                  Create Record
              </button>
      </nav>
      {/* TopAppBar (Mobile & Global Header) */}
      <header className="md:hidden flex justify-between items-center w-full px-md py-sm z-50 bg-surface-container-low dark:bg-surface-container-lowest border-b border-outline-variant dark:border-outline-variant sticky top-0">
      <div className="flex items-center gap-sm">
      <h1 className="font-display text-display text-primary dark:text-primary-fixed-dim">Focused Note Pin</h1>
      </div>
      <div className="flex items-center gap-md">
      <BadgeHelp className="text-primary cursor-pointer active:scale-95 transition-transform" aria-hidden={true} focusable="false" />
      <Wifi className="text-primary cursor-pointer active:scale-95 transition-transform" aria-hidden={true} focusable="false" />
      <img alt="User Profile" className="w-8 h-8 rounded-full border border-outline-variant object-cover" data-alt="A small, circular avatar portrait of a professional individual set against a neutral, high-key background. The lighting is soft and even, highlighting modern corporate aesthetics. The colors are muted with a focus on grays, whites, and subtle skin tones." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDy9OP7Q9bgxInYLWpcxq0R-5XJT7blgbAgYypEe1fG8voRh1dRl4b5p2mSSTwD8_rtb1UMXuitxKlo-UTJnm-e4qxQobGN3lPbU7lFLZevd1KZVg8wgOBllg1JJlH4X21r6pT2FdWQ3MpSKAjV0a2dpFyfYX8NOfN9BzaUMdqWqF1cjCDWOdlkkuKquEWi95-sGS-cxamLDCMaExi_cZ2-CW5_2DqWSce4HpYWqrGlNFuxsiuaZVAIYuqUTDDBj8fbo-bsB-kvuQ" />
      </div>
      </header>
      {/* Main Content Area */}
      <main className="flex-1 md:ml-64 p-gutter md:p-container-margin flex flex-col gap-lg pb-24">
      {/* Header & Actions */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-md">
      <div>
      <h2 className="font-display text-display text-on-background">Insights</h2>
      <p className="font-body-md text-body-md text-on-surface-variant mt-xs max-w-2xl">small metrics, recent activity, state distribution, actionable follow-up hints, empty/error state.</p>
      </div>
      <div className="flex gap-sm w-full md:w-auto">
      <button className="flex-1 md:flex-none flex items-center justify-center gap-xs px-md py-sm border border-outline-variant rounded bg-surface hover:bg-surface-container transition-colors text-on-surface font-label-md text-label-md" type="button" data-action-id="filter-2" onClick={actions?.["filter-2"]}>
      <ListFilter className="text-[16px]" aria-hidden={true} focusable="false" />
                          Filter
                      </button>
      <button className="flex-1 md:flex-none flex items-center justify-center gap-xs px-md py-sm bg-primary text-on-primary rounded hover:bg-on-primary-fixed-variant transition-colors font-label-md text-label-md" type="button" data-action-id="export-summary-3" onClick={actions?.["export-summary-3"]}>
      <Download className="text-[16px]" aria-hidden={true} focusable="false" />
                          Export Summary
                      </button>
      </div>
      </div>
      {/* Metric Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md shadow-sm">
      <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Record Growth</p>
      <div className="flex items-end justify-between mt-sm">
      <p className="font-display text-display text-on-surface">1,248</p>
      <div className="flex items-center text-primary-fixed-variant">
      <TrendingUp className="text-[16px]" aria-hidden={true} focusable="false" />
      <span className="font-body-sm text-body-sm ml-1">+12%</span>
      </div>
      </div>
      </div>
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md shadow-sm">
      <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Pin Rate</p>
      <div className="flex items-end justify-between mt-sm">
      <p className="font-display text-display text-on-surface">68.4%</p>
      <div className="flex items-center text-secondary">
      <Minus className="text-[16px]" aria-hidden={true} focusable="false" />
      <span className="font-body-sm text-body-sm ml-1">Stable</span>
      </div>
      </div>
      </div>
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md shadow-sm">
      <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Activity Volume</p>
      <div className="flex items-end justify-between mt-sm">
      <p className="font-display text-display text-on-surface">432</p>
      <div className="flex items-center text-error">
      <BadgeHelp className="text-[16px]" aria-hidden={true} focusable="false" />
      <span className="font-body-sm text-body-sm ml-1">-4%</span>
      </div>
      </div>
      </div>
      </div>
      {/* Main Dashboard Area (Bento Grid Style) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
      {/* Recent Activity Feed */}
      <div className="lg:col-span-1 bg-surface-container-lowest border border-outline-variant rounded-xl p-md shadow-sm flex flex-col h-[400px]">
      <h3 className="font-headline-sm text-headline-sm text-on-surface mb-md">Recent Activity</h3>
      <div className="flex-1 overflow-y-auto pr-2 space-y-md">
      <div className="flex gap-sm">
      <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center shrink-0">
      <BadgeHelp className="text-[16px] text-on-secondary-container" aria-hidden={true} focusable="false" />
      </div>
      <div>
      <p className="font-body-sm text-body-sm text-on-surface"><span className="font-medium">Note #402</span> pinned to project.</p>
      <p className="font-label-sm text-label-sm text-on-surface-variant mt-xs">10 mins ago</p>
      </div>
      </div>
      <div className="flex gap-sm">
      <div className="w-8 h-8 rounded-full bg-surface-variant flex items-center justify-center shrink-0">
      <Pencil className="text-[16px] text-on-surface-variant" aria-hidden={true} focusable="false" />
      </div>
      <div>
      <p className="font-body-sm text-body-sm text-on-surface"><span className="font-medium">Draft #88</span> updated by team.</p>
      <p className="font-label-sm text-label-sm text-on-surface-variant mt-xs">1 hour ago</p>
      </div>
      </div>
      <div className="flex gap-sm">
      <div className="w-8 h-8 rounded-full bg-tertiary-container flex items-center justify-center shrink-0">
      <BadgeHelp className="text-[16px] text-on-tertiary-container" aria-hidden={true} focusable="false" />
      </div>
      <div>
      <p className="font-body-sm text-body-sm text-on-surface"><span className="font-medium">Batch Q1</span> archived.</p>
      <p className="font-label-sm text-label-sm text-on-surface-variant mt-xs">3 hours ago</p>
      </div>
      </div>
      <div className="flex gap-sm">
      <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center shrink-0">
      <BadgeHelp className="text-[16px] text-on-secondary-container" aria-hidden={true} focusable="false" />
      </div>
      <div>
      <p className="font-body-sm text-body-sm text-on-surface"><span className="font-medium">Note #399</span> pinned to project.</p>
      <p className="font-label-sm text-label-sm text-on-surface-variant mt-xs">4 hours ago</p>
      </div>
      </div>
      </div>
      </div>
      {/* Charts & Hints Column */}
      <div className="lg:col-span-2 flex flex-col gap-gutter">
      {/* Actionable Hints (Top priority) */}
      <div className="bg-primary-container border border-outline-variant rounded-xl p-md shadow-sm flex items-start gap-md">
      <Lightbulb className="text-on-primary-container text-[24px]" aria-hidden={true} focusable="false" />
      <div className="flex-1">
      <h4 className="font-headline-sm text-headline-sm text-on-primary-container">Actionable Insight</h4>
      <p className="font-body-md text-body-md text-on-primary-container mt-xs opacity-90">3 high-priority notes haven't been pinned in over a week. Reviewing them may prevent workflow delays.</p>
      </div>
      <button className="px-sm py-xs bg-on-primary-container text-primary-container rounded font-label-sm text-label-sm hover:bg-surface-container-lowest transition-colors" type="button" data-action-id="review-now-4" onClick={actions?.["review-now-4"]}>
                              Review Now
                          </button>
      </div>
      {/* State Distribution & Empty State Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter flex-1 h-[280px]">
      {/* Distribution Chart (Simulated Bar Chart) */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md shadow-sm flex flex-col">
      <h3 className="font-headline-sm text-headline-sm text-on-surface mb-md">State Distribution</h3>
      <div className="flex-1 flex flex-col justify-end gap-sm pb-sm">
      <div className="flex items-center gap-sm w-full">
      <span className="font-mono text-mono w-16 text-on-surface-variant">Pinned</span>
      <div className="h-4 bg-primary rounded-r-sm w-[68%]"></div>
      <span className="font-body-sm text-body-sm">68%</span>
      </div>
      <div className="flex items-center gap-sm w-full">
      <span className="font-mono text-mono w-16 text-on-surface-variant">Draft</span>
      <div className="h-4 bg-secondary rounded-r-sm w-[20%]"></div>
      <span className="font-body-sm text-body-sm">20%</span>
      </div>
      <div className="flex items-center gap-sm w-full">
      <span className="font-mono text-mono w-16 text-on-surface-variant">Archiv</span>
      <div className="h-4 bg-surface-variant rounded-r-sm w-[12%]"></div>
      <span className="font-body-sm text-body-sm">12%</span>
      </div>
      </div>
      </div>
      {/* Empty/Error State Chart Area */}
      <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-md shadow-sm border-dashed flex flex-col items-center justify-center text-center">
      <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center mb-sm">
      <BadgeHelp className="text-on-surface-variant text-[24px]" aria-hidden={true} focusable="false" />
      </div>
      <h3 className="font-headline-sm text-headline-sm text-on-surface">Data Unavailable</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-xs max-w-[200px]">Not enough historical data to generate the predictive trend analysis.</p>
      </div>
      </div>
      </div>
      </div>
      </main>
      {/* Bottom Navigation (Mobile Only) */}
      <nav className="md:hidden fixed bottom-0 w-full bg-surface-container-lowest dark:bg-surface-container border-t border-outline-variant dark:border-outline-variant flex justify-around items-center py-sm pb-safe z-50 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
      <a className="flex flex-col items-center gap-xs p-xs text-on-surface-variant w-16 cursor-pointer" href="#" data-action-id="operations-4" onClick={(event) => { event.preventDefault(); actions?.["operations-4"]?.(); }}>
      <ListTodo className="text-[24px]" aria-hidden={true} focusable="false" />
      <span className="font-label-sm text-label-sm">Operations</span>
      </a>
      <a className="flex flex-col items-center gap-xs p-xs text-primary w-16 cursor-pointer" href="#" data-action-id="insights-5" onClick={(event) => { event.preventDefault(); actions?.["insights-5"]?.(); }}>
      <div className="bg-secondary-container px-sm py-xs rounded-full">
      <BarChart3  style={{fontVariationSettings: "'FILL' 1"}} className="text-[24px] text-on-secondary-container" aria-hidden={true} focusable="false" />
      </div>
      <span className="font-label-sm text-label-sm font-semibold">Insights</span>
      </a>
      <a className="flex flex-col items-center gap-xs p-xs text-on-surface-variant w-16 cursor-pointer" href="#" data-action-id="settings-6" onClick={(event) => { event.preventDefault(); actions?.["settings-6"]?.(); }}>
      <Settings className="text-[24px]" aria-hidden={true} focusable="false" />
      <span className="font-label-sm text-label-sm">Settings</span>
      </a>
      </nav>
    </>
  );
}
