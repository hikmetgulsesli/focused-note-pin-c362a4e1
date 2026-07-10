// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Record Editor - Focused Note Pin
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { BadgeHelp, ChevronDown, CircleAlert, FilePenLine, Minus, RefreshCwOff, Save } from "lucide-react";


export type RecordEditorFocusedNotePinActionId = "cancel-1" | "save-record-2";

export interface RecordEditorFocusedNotePinProps {
  actions?: Partial<Record<RecordEditorFocusedNotePinActionId, () => void>>;

}

export function RecordEditorFocusedNotePin({ actions }: RecordEditorFocusedNotePinProps) {
  return (
    <>
      <main className="w-full max-w-2xl bg-surface-container-lowest rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.05)] border border-outline-variant overflow-hidden flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-lg py-md border-b border-outline-variant bg-surface-container-low">
      <div className="flex items-center gap-sm">
      <FilePenLine className="text-primary" aria-hidden={true} focusable="false" />
      <h1 className="font-headline-md text-headline-md text-on-surface">Edit Record</h1>
      </div>
      <div className="flex items-center gap-sm bg-tertiary-container/10 px-sm py-xs rounded-full border border-tertiary-container/20">
      <RefreshCwOff className="text-tertiary text-[14px]" aria-hidden={true} focusable="false" />
      <span className="font-label-sm text-label-sm text-tertiary uppercase tracking-wider">Unsaved Changes</span>
      </div>
      </header>
      {/* Form Area */}
      <div className="p-lg flex-grow flex flex-col gap-lg">
      {/* Title Field (Required with Validation Error) */}
      <div className="flex flex-col gap-xs">
      <label className="font-label-md text-label-md text-on-surface-variant flex items-center gap-xs" htmlFor="record-title">
                          Title <span className="text-error">*</span>
      </label>
      <div className="relative">
      <input className="w-full bg-surface-container-lowest border border-error rounded-DEFAULT px-md py-sm font-body-md text-body-md text-on-surface focus:outline-none focus:ring-1 focus:ring-error focus:border-error transition-colors pr-10" id="record-title" placeholder="Enter record title" type="text" defaultValue="" />
      <CircleAlert className="absolute right-sm top-1/2 -translate-y-1/2 text-error" aria-hidden={true} focusable="false" />
      </div>
      <p className="font-body-sm text-body-sm text-error flex items-center gap-xs mt-1">
                          Title is a required field.
                      </p>
      </div>
      {/* Description Field (Optional) */}
      <div className="flex flex-col gap-xs">
      <label className="font-label-md text-label-md text-on-surface-variant flex justify-between items-end" htmlFor="record-description">
      <span>Description <span className="text-secondary opacity-60 font-normal">(Optional)</span></span>
      </label>
      <textarea className="w-full bg-surface-container-lowest border border-outline-variant rounded-DEFAULT px-md py-sm font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-y min-h-[100px]" id="record-description" placeholder="Add detailed notes here..." rows={4}></textarea>
      </div>
      {/* Two Column Layout for Priority and Category */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
      {/* Priority Field */}
      <div className="flex flex-col gap-xs">
      <label className="font-label-md text-label-md text-on-surface-variant">Priority</label>
      <div className="flex gap-sm h-[42px]">
      <label className="flex-1 cursor-pointer">
      <input defaultChecked={true} className="peer sr-only" name="priority" type="radio" defaultValue="normal" />
      <div className="h-full flex items-center justify-center gap-xs px-sm py-xs border border-outline-variant rounded-DEFAULT bg-surface-container-lowest text-on-surface-variant peer-checked:bg-primary-container peer-checked:text-on-primary-container peer-checked:border-primary-container transition-colors">
      <Minus className="text-[18px]" aria-hidden={true} focusable="false" />
      <span className="font-body-sm text-body-sm font-medium">Normal</span>
      </div>
      </label>
      <label className="flex-1 cursor-pointer">
      <input className="peer sr-only" name="priority" type="radio" defaultValue="pinned" />
      <div className="h-full flex items-center justify-center gap-xs px-sm py-xs border border-outline-variant rounded-DEFAULT bg-surface-container-lowest text-on-surface-variant peer-checked:bg-tertiary-container peer-checked:text-on-tertiary-container peer-checked:border-tertiary-container transition-colors">
      <BadgeHelp className="text-[18px]" aria-hidden={true} focusable="false" />
      <span className="font-body-sm text-body-sm font-medium">Pinned</span>
      </div>
      </label>
      </div>
      </div>
      {/* Category Field */}
      <div className="flex flex-col gap-xs">
      <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="record-category">Category</label>
      <div className="relative h-[42px]">
      <select className="appearance-none w-full h-full bg-surface-container-lowest border border-outline-variant rounded-DEFAULT px-md py-sm font-body-md text-body-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors cursor-pointer pr-10" id="record-category">
      <option disabled={true} selected={true} value="">Select category</option>
      <option value="research">Research</option>
      <option value="meetings">Meetings</option>
      <option value="ideas">Ideas</option>
      <option value="tasks">Tasks</option>
      </select>
      <ChevronDown className="absolute right-sm top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none" aria-hidden={true} focusable="false" />
      </div>
      </div>
      </div>
      </div>
      {/* Footer Actions */}
      <footer className="px-lg py-md border-t border-outline-variant bg-surface-container-low flex justify-end gap-sm items-center">
      <button className="px-lg py-sm rounded-DEFAULT border border-outline-variant text-on-surface bg-transparent hover:bg-surface-container transition-colors duration-200 font-label-md text-label-md font-medium" type="button" data-action-id="cancel-1" onClick={actions?.["cancel-1"]}>
                      Cancel
                  </button>
      <button className="px-lg py-sm rounded-DEFAULT bg-primary text-on-primary hover:bg-on-primary-fixed-variant transition-colors duration-200 font-label-md text-label-md font-medium flex items-center gap-xs shadow-sm" type="button" data-action-id="save-record-2" onClick={actions?.["save-record-2"]}>
      <Save className="text-[18px]" aria-hidden={true} focusable="false" />
                      Save Record
                  </button>
      </footer>
      </main>
    </>
  );
}
