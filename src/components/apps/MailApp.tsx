import React from 'react';
import { User, Edit2, Inbox, Send as SendIcon, File, Trash2, Archive, Users, Calendar, Paperclip, Smile, Image as ImageIcon, Send } from 'lucide-react';

export const MailApp = () => (
  <div className="flex flex-col md:flex-row h-full text-[#e2e8f0] bg-[#13141c]">
    {/* Sidebar */}
    <div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-white/5 bg-[#1a1b26]/50 p-4 flex flex-col shrink-0">
      {/* Profile */}
      <div className="hidden md:flex items-center gap-3 mb-6 px-2">
        <div className="w-10 h-10 rounded-full bg-[#2a2b3d] flex items-center justify-center text-[#a3b8f0]">
          <User size={20} />
        </div>
        <div>
          <div className="font-semibold text-white text-sm">Postmaster</div>
          <div className="text-[10px] text-[#64748b] tracking-wider uppercase">Active Session</div>
        </div>
      </div>

      {/* Compose Button */}
      <button className="w-full bg-gradient-to-r from-[#d0bcff] to-[#a3b8f0] text-[#13141c] font-semibold rounded-xl py-2 md:py-3 mb-4 md:mb-6 flex items-center justify-center gap-2 hover:opacity-90 transition-opacity text-sm md:text-base">
        <Edit2 size={16} /> Compose
      </button>

      {/* Navigation */}
      <div className="flex flex-row md:flex-col gap-1 flex-1 overflow-x-auto no-scrollbar">
        <button className="flex items-center justify-between px-3 md:px-4 py-2 md:py-2.5 rounded-xl text-xs md:text-sm bg-[#2a2b3d] text-white transition-colors whitespace-nowrap">
          <div className="flex items-center gap-2 md:gap-3">
            <Inbox size={16} className="text-[#a3b8f0] md:w-[18px] md:h-[18px]" />
            Inbox (0)
          </div>
        </button>
        <button className="flex items-center justify-between px-3 md:px-4 py-2 md:py-2.5 rounded-xl text-xs md:text-sm hover:bg-white/5 text-[#94a3b8] transition-colors whitespace-nowrap">
          <div className="flex items-center gap-2 md:gap-3">
            <SendIcon size={16} className="md:w-[18px] md:h-[18px]" />
            Sent
          </div>
        </button>
        <button className="flex items-center justify-between px-3 md:px-4 py-2 md:py-2.5 rounded-xl text-xs md:text-sm hover:bg-white/5 text-[#94a3b8] transition-colors whitespace-nowrap">
          <div className="flex items-center gap-2 md:gap-3">
            <File size={16} className="md:w-[18px] md:h-[18px]" />
            Drafts
          </div>
        </button>
        <button className="flex items-center justify-between px-3 md:px-4 py-2 md:py-2.5 rounded-xl text-xs md:text-sm hover:bg-white/5 text-[#94a3b8] transition-colors whitespace-nowrap">
          <div className="flex items-center gap-2 md:gap-3">
            <Trash2 size={16} className="md:w-[18px] md:h-[18px]" />
            Trash
          </div>
        </button>
        <button className="flex items-center justify-between px-3 md:px-4 py-2 md:py-2.5 rounded-xl text-xs md:text-sm hover:bg-white/5 text-[#94a3b8] transition-colors whitespace-nowrap">
          <div className="flex items-center gap-2 md:gap-3">
            <Archive size={16} className="md:w-[18px] md:h-[18px]" />
            Archive
          </div>
        </button>
      </div>

      {/* Bottom Nav */}
      <div className="hidden md:flex flex-col gap-1 pt-4 border-t border-white/5">
        <button className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm hover:bg-white/5 text-[#94a3b8] transition-colors">
          <Users size={18} />
          Contacts
        </button>
        <button className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm hover:bg-white/5 text-[#94a3b8] transition-colors">
          <Calendar size={18} />
          Calendar
        </button>
      </div>
    </div>

    {/* Main Content */}
    <div className="flex-1 flex flex-col p-4 md:p-8 min-w-0">
      <div className="max-w-3xl w-full mx-auto flex flex-col h-full">
        <div className="mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-1 md:mb-2">New Message</h2>
          <p className="text-xs md:text-sm text-[#94a3b8]">Compose a direct message to the administrator.</p>
        </div>

        <div className="flex flex-col gap-3 md:gap-4 flex-1">
          <div className="flex flex-col md:flex-row md:items-center bg-[#1a1b26] border border-white/5 rounded-xl px-3 md:px-4 py-2 md:py-3">
            <span className="text-[#64748b] text-[10px] md:text-xs font-bold tracking-wider uppercase w-full md:w-24 mb-1 md:mb-0">To</span>
            <input type="text" readOnly value="mahmoud.osama@portfolio.os" className="bg-transparent outline-none flex-1 text-xs md:text-sm text-[#94a3b8]" />
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center bg-[#1a1b26] border border-white/5 rounded-xl px-3 md:px-4 py-2 md:py-3 focus-within:border-[#a3b8f0]/50 transition-colors">
            <span className="text-[#64748b] text-[10px] md:text-xs font-bold tracking-wider uppercase w-full md:w-24 mb-1 md:mb-0">From</span>
            <input type="text" placeholder="Your Email" className="bg-transparent outline-none flex-1 text-xs md:text-sm text-white placeholder:text-[#475569]" />
          </div>

          <div className="flex flex-col md:flex-row md:items-center bg-[#1a1b26] border border-white/5 rounded-xl px-3 md:px-4 py-2 md:py-3 focus-within:border-[#a3b8f0]/50 transition-colors">
            <span className="text-[#64748b] text-[10px] md:text-xs font-bold tracking-wider uppercase w-full md:w-24 mb-1 md:mb-0">Subject</span>
            <input type="text" placeholder="Subject" className="bg-transparent outline-none flex-1 text-xs md:text-sm text-white placeholder:text-[#475569]" />
          </div>

          <div className="flex-1 bg-[#1a1b26] border border-white/5 rounded-xl p-3 md:p-4 flex flex-col focus-within:border-[#a3b8f0]/50 transition-colors min-h-[200px]">
            <textarea 
              className="bg-transparent outline-none flex-1 resize-none text-xs md:text-sm text-white placeholder:text-[#475569] leading-relaxed" 
              placeholder="Write your message here..."
            ></textarea>
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-3 md:pt-4 mt-3 md:mt-4 border-t border-white/5">
              <div className="flex gap-4 text-[#64748b] w-full md:w-auto justify-center md:justify-start">
                <button className="hover:text-white transition-colors"><Paperclip size={18} className="md:w-5 md:h-5" /></button>
                <button className="hover:text-white transition-colors"><Smile size={18} className="md:w-5 md:h-5" /></button>
                <button className="hover:text-white transition-colors"><ImageIcon size={18} className="md:w-5 md:h-5" /></button>
              </div>
              <button className="w-full md:w-auto bg-[#a3b8f0] hover:bg-[#b5c7f5] text-[#13141c] font-semibold rounded-full px-6 py-2 md:py-2.5 flex items-center justify-center gap-2 text-xs md:text-sm transition-colors">
                Send Message <Send size={14} className="md:w-4 md:h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
