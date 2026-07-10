// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Record Operations - Focused Note Pin
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowUp, BadgeHelp, BarChart3, CalendarDays, ChevronRight, CircleAlert, Download, ListFilter, ListTodo, Menu, Pencil, Plus, Search, Settings, Wifi, X } from "lucide-react";


export type RecordOperationsFocusedNotePinActionId = "create-record-1" | "menu-2" | "cloud-sync-status-3" | "network-status-4" | "filter-5" | "export-6" | "retry-7" | "edit-8" | "edit-9" | "edit-10" | "push-pin-11" | "close-12" | "edit-13" | "comment-14" | "mark-complete-15" | "operations-1" | "insights-2" | "settings-3" | "privacy-policy-4" | "terms-of-service-5" | "help-center-6";

export interface RecordOperationsFocusedNotePinProps {
  actions?: Partial<Record<RecordOperationsFocusedNotePinActionId, () => void>>;

}

export function RecordOperationsFocusedNotePin({ actions }: RecordOperationsFocusedNotePinProps) {
  return (
    <>
      {/* Side Nav */}
      <aside className="fixed left-0 top-0 h-full flex flex-col pt-20 pb-md px-sm z-40 bg-surface dark:bg-inverse-surface w-64 border-r border-outline-variant dark:border-outline-variant transition-transform transform -translate-x-full md:translate-x-0 md:relative md:flex-shrink-0" id="mobile-menu">
      <div className="mb-xl px-md">
      <h1 className="font-headline-md text-headline-md font-bold text-on-surface dark:text-inverse-on-surface">Focused Note Pin</h1>
      <p className="font-label-sm text-label-sm text-on-surface-variant mt-xs">Professional Edition</p>
      </div>
      <nav className="flex-1 space-y-sm">
      <a className="flex items-center gap-md px-md py-sm bg-secondary-fixed dark:bg-on-secondary-fixed-variant text-on-secondary-fixed dark:text-secondary-fixed rounded-full hover:bg-surface-container-high dark:hover:bg-surface-container-highest transition-colors cursor-pointer active:opacity-80" href="#" data-action-id="operations-1" onClick={(event) => { event.preventDefault(); actions?.["operations-1"]?.(); }}>
      <ListTodo  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Operations</span>
      </a>
      <a className="flex items-center gap-md px-md py-sm text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-container-highest rounded-full transition-colors cursor-pointer active:opacity-80" href="#" data-action-id="insights-2" onClick={(event) => { event.preventDefault(); actions?.["insights-2"]?.(); }}>
      <BarChart3 aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Insights</span>
      </a>
      <a className="flex items-center gap-md px-md py-sm text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-container-highest rounded-full transition-colors cursor-pointer active:opacity-80" href="#" data-action-id="settings-3" onClick={(event) => { event.preventDefault(); actions?.["settings-3"]?.(); }}>
      <Settings aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Settings</span>
      </a>
      </nav>
      <div className="mt-auto px-md pb-md">
      <button className="w-full bg-primary text-on-primary hover:bg-primary-container hover:text-on-primary-container transition-colors duration-200 py-sm rounded flex items-center justify-center gap-sm font-label-md text-label-md shadow-sm" type="button" data-action-id="create-record-1" onClick={actions?.["create-record-1"]}>
      <Plus className="text-[18px]" aria-hidden={true} focusable="false" />
                      Create Record
                  </button>
      </div>
      </aside>
      {/* Main Content Wrapper */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden bg-background">
      {/* Top App Bar */}
      <header className="flex justify-between items-center w-full px-md py-sm z-50 bg-surface-container-low dark:bg-surface-container-lowest border-b border-outline-variant dark:border-outline-variant h-[64px] flex-shrink-0">
      <div className="flex items-center gap-md">
      <button className="md:hidden p-sm rounded hover:bg-surface-container text-on-surface-variant transition-colors" type="button" aria-label="Menu" data-action-id="menu-2" onClick={actions?.["menu-2"]}>
      <Menu aria-hidden={true} focusable="false" />
      </button>
      {/* Search Bar (ACT_SEARCH_RECORDS) */}
      <div className="relative w-full max-w-md hidden sm:block">
      <Search className="absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]" aria-hidden={true} focusable="false" />
      <input className="w-full bg-surface-container text-on-surface pl-xl pr-md py-xs rounded border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary transition-colors font-body-sm text-body-sm h-8" placeholder="Search records..." type="text" />
      <div className="absolute right-sm top-1/2 -translate-y-1/2 flex items-center">
      <span className="font-mono text-mono text-on-surface-variant bg-surface-variant px-xs rounded text-[10px]">CMD+K</span>
      </div>
      </div>
      </div>
      <div className="flex items-center gap-sm">
      <button aria-label="Cloud Sync Status" className="p-sm rounded text-on-surface-variant hover:bg-surface-container transition-colors cursor-pointer active:scale-95" type="button" data-action-id="cloud-sync-status-3" onClick={actions?.["cloud-sync-status-3"]}>
      <BadgeHelp  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      </button>
      <button aria-label="Network Status" className="p-sm rounded text-on-surface-variant hover:bg-surface-container transition-colors cursor-pointer active:scale-95" type="button" data-action-id="network-status-4" onClick={actions?.["network-status-4"]}>
      <Wifi aria-hidden={true} focusable="false" />
      </button>
      <div className="h-8 w-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-headline-sm text-headline-sm ml-sm cursor-pointer border border-outline-variant shadow-sm overflow-hidden">
      <img alt="User Profile" className="w-full h-full object-cover" data-alt="A small, professional user avatar portrait of a person in a corporate setting. The lighting is soft and natural, with a light gray background. The image is cropped to a perfect circle for a UI component." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxN80DHIyClDIywX2sgOH2Z536XyzAMSRix_zfdWkCx-JNXXC7l757Es5izvCfLhIeXC4R4QWtgRncZHF8HE2jxeoLRccTRywQ6nAETU6y0RH189ANF6ZaY69QgJfjtAfltAuyrJ0frzSiVualN-kbtA4XSLSVi4uvliIVjfB16_5f0QsDCS4SPmmkWPGv9Gknvc37JPUuGBeMQiWGzV_R3QtDdGxNLQ9HRjSs95FHfXKzLZebA4Am_35WHKR0z0OTFWAUzOPibw" />
      </div>
      </div>
      </header>
      {/* Main Content Area */}
      <main className="flex-1 overflow-auto p-md sm:p-lg flex flex-col gap-lg">
      {/* Page Header & Metrics */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-md">
      <div>
      <h2 className="font-display text-display text-on-background">Record Operations</h2>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-xs">summary metrics, primary list/board/table, filters, search, selected item preview, empty/loading/error states.</p>
      </div>
      <div className="flex gap-sm">
      <button className="flex items-center gap-xs px-md py-xs bg-surface border border-outline-variant rounded font-label-sm text-label-sm hover:bg-surface-container transition-colors" type="button" data-action-id="filter-5" onClick={actions?.["filter-5"]}>
      <ListFilter className="text-[16px]" aria-hidden={true} focusable="false" />
                              Filter
                          </button>
      <button className="flex items-center gap-xs px-md py-xs bg-surface border border-outline-variant rounded font-label-sm text-label-sm hover:bg-surface-container transition-colors" type="button" data-action-id="export-6" onClick={actions?.["export-6"]}>
      <Download className="text-[16px]" aria-hidden={true} focusable="false" />
                              Export
                          </button>
      </div>
      </div>
      {/* Summary Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-md">
      <div className="bg-surface border border-outline-variant rounded-lg p-md shadow-[0_2px_4px_rgba(0,0,0,0.05)]">
      <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-sm">Total Records</p>
      <div className="flex items-baseline gap-sm">
      <span className="font-display text-display text-on-surface">1,248</span>
      <span className="flex items-center text-primary font-label-sm text-label-sm">
      <ArrowUp className="text-[14px]" aria-hidden={true} focusable="false" />
                                  12%
                              </span>
      </div>
      </div>
      <div className="bg-surface border border-outline-variant rounded-lg p-md shadow-[0_2px_4px_rgba(0,0,0,0.05)]">
      <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-sm">Pinned Notes</p>
      <div className="flex items-baseline gap-sm">
      <span className="font-display text-display text-on-surface">42</span>
      <span className="flex items-center text-secondary font-label-sm text-label-sm">
      <BadgeHelp className="text-[14px]" aria-hidden={true} focusable="false" />
                                  0%
                              </span>
      </div>
      </div>
      <div className="bg-surface border border-outline-variant rounded-lg p-md shadow-[0_2px_4px_rgba(0,0,0,0.05)]">
      <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-sm">Recent Activity</p>
      <div className="flex items-baseline gap-sm">
      <span className="font-display text-display text-on-surface">89</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant ml-xs">updates today</span>
      </div>
      </div>
      </div>
      {/* Error State Banner Example (Hidden by default, shown for demonstration) */}
      <div className="bg-error-container text-on-error-container p-md rounded border border-error/20 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-md">
      <CircleAlert className="text-error" aria-hidden={true} focusable="false" />
      <div>
      <h4 className="font-headline-sm text-headline-sm font-semibold">Connection Error</h4>
      <p className="font-body-sm text-body-sm mt-xs opacity-90">Failed to sync latest updates. Please check your network connection.</p>
      </div>
      </div>
      <button className="px-md py-xs bg-error text-on-error rounded font-label-sm text-label-sm hover:opacity-90 transition-opacity" type="button" data-action-id="retry-7" onClick={actions?.["retry-7"]}>
                          Retry
                      </button>
      </div>
      {/* Main Data Area (Table + Inspector) */}
      <div className="flex-1 flex gap-md min-h-[400px]">
      {/* Data Table Container */}
      <div className="flex-1 bg-surface border border-outline-variant rounded-lg shadow-[0_2px_4px_rgba(0,0,0,0.05)] flex flex-col overflow-hidden">
      {/* Table Toolbar */}
      <div className="p-sm border-b border-outline-variant flex gap-sm bg-surface-container-lowest">
      <div className="relative flex-1 max-w-xs">
      <Search className="absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant text-[16px]" aria-hidden={true} focusable="false" />
      <input className="w-full bg-surface-container-low text-on-surface pl-xl pr-sm py-xs rounded border border-transparent focus:border-outline-variant focus:bg-surface focus:ring-0 transition-colors font-body-sm text-body-sm h-8" placeholder="Filter in view..." type="text" />
      </div>
      <div className="flex gap-xs ml-auto">
      <span className="inline-flex items-center px-sm py-xs rounded bg-surface-variant text-on-surface-variant font-label-sm text-label-sm cursor-pointer hover:bg-surface-container-high">Status: Active <X className="text-[14px] ml-xs" aria-hidden={true} focusable="false" /></span>
      <span className="inline-flex items-center px-sm py-xs rounded bg-surface-variant text-on-surface-variant font-label-sm text-label-sm cursor-pointer hover:bg-surface-container-high">Priority: High <X className="text-[14px] ml-xs" aria-hidden={true} focusable="false" /></span>
      </div>
      </div>
      {/* Table */}
      <div className="flex-1 overflow-auto">
      <table className="w-full text-left border-collapse">
      <thead className="sticky top-0 bg-surface z-10 border-b border-outline-variant">
      <tr>
      <th className="p-sm font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider w-10 text-center"><input className="rounded border-outline-variant text-primary focus:ring-primary h-4 w-4" type="checkbox" /></th>
      <th className="p-sm font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">ID</th>
      <th className="p-sm font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">Title</th>
      <th className="p-sm font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">Status</th>
      <th className="p-sm font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold">Priority</th>
      <th className="p-sm font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-semibold text-right">Actions</th>
      </tr>
      </thead>
      <tbody className="font-body-sm text-body-sm divide-y divide-outline-variant/50">
      <tr className="hover:bg-surface-container-lowest transition-colors cursor-pointer bg-secondary-fixed/30">
      <td className="p-sm text-center"><input defaultChecked={true} className="rounded border-outline-variant text-primary focus:ring-primary h-4 w-4" type="checkbox" /></td>
      <td className="p-sm font-mono text-mono text-on-surface-variant">REC-1042</td>
      <td className="p-sm font-medium text-on-surface">Q3 Financial Audit Preparation</td>
      <td className="p-sm">
      <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed text-[10px] font-medium">In Progress</span>
      </td>
      <td className="p-sm">
      <span className="inline-flex items-center text-error font-medium"><BadgeHelp className="text-[16px] mr-xs" aria-hidden={true} focusable="false" />High</span>
      </td>
      <td className="p-sm text-right">
      <button className="text-on-surface-variant hover:text-primary transition-colors p-xs rounded hover:bg-surface-container" type="button" aria-label="Edit" data-action-id="edit-8" onClick={actions?.["edit-8"]}><Pencil className="text-[18px]" aria-hidden={true} focusable="false" /></button>
      </td>
      </tr>
      <tr className="hover:bg-surface-container-lowest transition-colors cursor-pointer">
      <td className="p-sm text-center"><input className="rounded border-outline-variant text-primary focus:ring-primary h-4 w-4" type="checkbox" /></td>
      <td className="p-sm font-mono text-mono text-on-surface-variant">REC-1041</td>
      <td className="p-sm font-medium text-on-surface">Update Client Security Protocols</td>
      <td className="p-sm">
      <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-surface-variant text-on-surface-variant text-[10px] font-medium">Draft</span>
      </td>
      <td className="p-sm">
      <span className="inline-flex items-center text-secondary font-medium"><ChevronRight className="text-[16px] mr-xs" aria-hidden={true} focusable="false" />Medium</span>
      </td>
      <td className="p-sm text-right">
      <button className="text-on-surface-variant hover:text-primary transition-colors p-xs rounded hover:bg-surface-container" type="button" aria-label="Edit" data-action-id="edit-9" onClick={actions?.["edit-9"]}><Pencil className="text-[18px]" aria-hidden={true} focusable="false" /></button>
      </td>
      </tr>
      <tr className="hover:bg-surface-container-lowest transition-colors cursor-pointer">
      <td className="p-sm text-center"><input className="rounded border-outline-variant text-primary focus:ring-primary h-4 w-4" type="checkbox" /></td>
      <td className="p-sm font-mono text-mono text-on-surface-variant">REC-1040</td>
      <td className="p-sm font-medium text-on-surface">Server Migration Phase 2</td>
      <td className="p-sm">
      <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-surface-variant text-on-surface-variant text-[10px] font-medium">Pending</span>
      </td>
      <td className="p-sm">
      <span className="inline-flex items-center text-error font-medium"><BadgeHelp className="text-[16px] mr-xs" aria-hidden={true} focusable="false" />High</span>
      </td>
      <td className="p-sm text-right">
      <button className="text-on-surface-variant hover:text-primary transition-colors p-xs rounded hover:bg-surface-container" type="button" aria-label="Edit" data-action-id="edit-10" onClick={actions?.["edit-10"]}><Pencil className="text-[18px]" aria-hidden={true} focusable="false" /></button>
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      </div>
      {/* Selected Item Preview (Inspector Pane) */}
      <aside className="w-80 bg-surface border border-outline-variant rounded-lg shadow-[0_2px_4px_rgba(0,0,0,0.05)] hidden lg:flex flex-col overflow-hidden flex-shrink-0">
      <div className="p-md border-b border-outline-variant flex justify-between items-center bg-surface-container-lowest">
      <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">Inspector</h3>
      <div className="flex gap-xs">
      <button className="p-xs rounded text-on-surface-variant hover:bg-surface-container transition-colors" type="button" aria-label="Push Pin" data-action-id="push-pin-11" onClick={actions?.["push-pin-11"]}><BadgeHelp className="text-[18px]" aria-hidden={true} focusable="false" /></button>
      <button className="p-xs rounded text-on-surface-variant hover:bg-surface-container transition-colors" type="button" aria-label="Close" data-action-id="close-12" onClick={actions?.["close-12"]}><X className="text-[18px]" aria-hidden={true} focusable="false" /></button>
      </div>
      </div>
      <div className="flex-1 overflow-auto p-md space-y-lg">
      {/* Header Info */}
      <div>
      <div className="flex items-center gap-sm mb-xs">
      <span className="font-mono text-mono text-on-surface-variant text-[10px] px-1.5 py-0.5 bg-surface-variant rounded">REC-1042</span>
      <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed text-[10px] font-medium">In Progress</span>
      </div>
      <h4 className="font-headline-md text-headline-md font-bold text-on-surface leading-tight">Q3 Financial Audit Preparation</h4>
      </div>
      {/* Metadata Grid */}
      <div className="grid grid-cols-2 gap-sm">
      <div>
      <p className="font-label-sm text-label-sm text-on-surface-variant uppercase mb-xs">Assignee</p>
      <div className="flex items-center gap-xs">
      <div className="w-5 h-5 rounded-full bg-primary-container overflow-hidden">
      <img alt="Assignee" className="w-full h-full object-cover" data-alt="A small generic avatar for a user profile in a corporate UI." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCijeG4psUkA5RhNPh6Ym3njqcrwmVRpY4HVN1w9z04KcGv1Dy6yAmAbBAmDxvdZs3qQEwF-Sfs8CfTvK6fiSiU3Poysq9BiAN7CZx4VL2rShB1rG7IQpgBJ0cMpyNQ0SrOf9UtzIWkAHka5-1JtbQlYHqCnIkboWaB6J1hKfwWTcKYRaSXRgmHb2s19ordEgxp5Y4UDpNvU1aLSiNrBKARU057RQid46Gzk-57w7v2FDZxNYGi2VgAa_rH-bNVKHCafSy67G7wjQ" />
      </div>
      <span className="font-body-sm text-body-sm text-on-surface">J. Doe</span>
      </div>
      </div>
      <div>
      <p className="font-label-sm text-label-sm text-on-surface-variant uppercase mb-xs">Due Date</p>
      <span className="font-body-sm text-body-sm text-on-surface flex items-center gap-xs"><CalendarDays className="text-[14px]" aria-hidden={true} focusable="false" /> Oct 15</span>
      </div>
      </div>
      <hr className="border-outline-variant/50" />
      {/* Description */}
      <div>
      <p className="font-label-sm text-label-sm text-on-surface-variant uppercase mb-sm flex items-center justify-between">Description <button className="text-primary hover:underline font-normal text-[10px]" type="button" data-action-id="edit-13" onClick={actions?.["edit-13"]}>Edit</button></p>
      <p className="font-body-sm text-body-sm text-on-surface leading-relaxed whitespace-pre-wrap">Compile all necessary documentation for the upcoming Q3 financial audit. Ensure all expense reports are reconciled and vendor invoices are processed.
      
      Focus areas:
      - Departmental spend variance
      - Capital expenditure logs
      - Contractor payments</p>
      </div>
      <hr className="border-outline-variant/50" />
      {/* Tags/Labels */}
      <div>
      <p className="font-label-sm text-label-sm text-on-surface-variant uppercase mb-sm">Tags</p>
      <div className="flex flex-wrap gap-xs">
      <span className="px-2 py-1 rounded bg-surface-variant text-on-surface-variant font-label-sm text-label-sm text-[10px]">Finance</span>
      <span className="px-2 py-1 rounded bg-surface-variant text-on-surface-variant font-label-sm text-label-sm text-[10px]">Compliance</span>
      <span className="px-2 py-1 border border-dashed border-outline-variant text-on-surface-variant rounded font-label-sm text-label-sm text-[10px] cursor-pointer hover:bg-surface-container"><Plus className="text-[12px] align-middle" aria-hidden={true} focusable="false" /> Add Tag</span>
      </div>
      </div>
      </div>
      <div className="p-md border-t border-outline-variant bg-surface-container-lowest flex gap-sm">
      <button className="flex-1 bg-surface border border-outline-variant text-on-surface rounded py-xs font-label-sm text-label-sm hover:bg-surface-container transition-colors" type="button" data-action-id="comment-14" onClick={actions?.["comment-14"]}>Comment</button>
      <button className="flex-1 bg-primary text-on-primary rounded py-xs font-label-sm text-label-sm hover:bg-primary-container transition-colors shadow-sm" type="button" data-action-id="mark-complete-15" onClick={actions?.["mark-complete-15"]}>Mark Complete</button>
      </div>
      </aside>
      </div>
      </main>
      {/* Footer */}
      <footer className="w-full py-md px-lg flex justify-between items-center mt-auto bg-surface-container-lowest dark:bg-surface-container border-t border-outline-variant dark:border-outline-variant flex-shrink-0">
      <div className="font-label-sm text-label-sm text-secondary dark:text-secondary-fixed-dim">
                      © 2024 Focused Note Pin. All rights reserved.
                  </div>
      <div className="flex gap-md font-label-sm text-label-sm">
      <a className="text-secondary dark:text-secondary-fixed-dim hover:text-primary dark:hover:text-primary-fixed transition-colors underline-offset-4 hover:underline" href="#" data-action-id="privacy-policy-4" onClick={(event) => { event.preventDefault(); actions?.["privacy-policy-4"]?.(); }}>Privacy Policy</a>
      <a className="text-secondary dark:text-secondary-fixed-dim hover:text-primary dark:hover:text-primary-fixed transition-colors underline-offset-4 hover:underline" href="#" data-action-id="terms-of-service-5" onClick={(event) => { event.preventDefault(); actions?.["terms-of-service-5"]?.(); }}>Terms of Service</a>
      <a className="text-secondary dark:text-secondary-fixed-dim hover:text-primary dark:hover:text-primary-fixed transition-colors underline-offset-4 hover:underline" href="#" data-action-id="help-center-6" onClick={(event) => { event.preventDefault(); actions?.["help-center-6"]?.(); }}>Help Center</a>
      </div>
      </footer>
      </div>
    </>
  );
}
