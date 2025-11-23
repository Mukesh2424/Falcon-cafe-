import React, { useEffect, useRef } from 'react';
import { Mic, MicOff, Coffee, AlertCircle } from 'lucide-react';
import { useFalconX } from './hooks/useGeminiLive';
import { ConnectionState } from './types';
import Visualizer from './components/Visualizer';
import ChatMessageBubble from './components/ChatMessageBubble';

const App: React.FC = () => {
  const { 
    connect, 
    disconnect, 
    connectionState, 
    messages, 
    inputAnalyser, 
    outputAnalyser,
    error 
  } = useFalconX();

  const chatContainerRef = useRef<HTMLDivElement>(null);

  const isConnected = connectionState === ConnectionState.CONNECTED;
  const isConnecting = connectionState === ConnectionState.CONNECTING;

  // Auto-scroll to bottom
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleToggle = () => {
    if (isConnected || isConnecting) {
      disconnect();
    } else {
      connect();
    }
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-200 flex flex-col items-center justify-center p-4 md:p-6">
      
      {/* Header */}
      <header className="w-full max-w-2xl flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-600 to-orange-700 flex items-center justify-center shadow-lg shadow-orange-900/40">
            <Coffee className="text-white" size={24} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-amber-50 tracking-tight">Falcon Café</h1>
            <p className="text-xs text-amber-400/80 font-medium uppercase tracking-widest">Voice Barista</p>
          </div>
        </div>
        
        <div className={`px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-2 border shadow-sm
          ${isConnected 
            ? 'bg-emerald-950/40 text-emerald-400 border-emerald-800' 
            : isConnecting 
              ? 'bg-amber-950/40 text-amber-400 border-amber-800'
              : 'bg-stone-800 text-stone-400 border-stone-700'
          }`}>
          <div className={`w-2 h-2 rounded-full ${isConnected ? 'bg-emerald-400 animate-pulse' : isConnecting ? 'bg-amber-400' : 'bg-stone-500'}`}></div>
          {connectionState}
        </div>
      </header>

      {/* Main Chat Area */}
      <main className="w-full max-w-2xl bg-stone-900/60 backdrop-blur-md border border-stone-800 rounded-[2rem] shadow-2xl overflow-hidden flex flex-col h-[650px] relative">
        
        {/* Messages */}
        <div 
          ref={chatContainerRef}
          className="flex-1 overflow-y-auto p-6 scroll-smooth space-y-4"
        >
          {messages.length === 0 && (
            <div className="h-full flex flex-col items-center justify-center text-stone-500 text-center p-8 space-y-4">
              <div className="w-20 h-20 bg-stone-800/50 rounded-full flex items-center justify-center border border-stone-700/50">
                <Mic size={36} className="opacity-40" />
              </div>
              <div className="space-y-1">
                <p className="text-lg font-medium text-stone-300">Welcome to Falcon Café</p>
                <p className="text-sm text-stone-500">Tap the mic to place your coffee order.</p>
              </div>
            </div>
          )}
          
          {messages.map((msg) => (
            <ChatMessageBubble key={msg.id} message={msg} />
          ))}
        </div>

        {/* Error Banner */}
        {error && (
          <div className="absolute top-0 left-0 w-full bg-red-500/90 text-white p-3 text-sm text-center flex items-center justify-center gap-2 backdrop-blur-md z-10 shadow-lg">
            <AlertCircle size={16} />
            <span>{error}</span>
          </div>
        )}

        {/* Controls & Visualization */}
        <div className="bg-stone-900/90 border-t border-stone-800 p-6 backdrop-blur-md z-20">
          <div className="flex flex-col gap-5">
            
            {/* Visualizers Row */}
            <div className="flex items-center gap-3 h-14">
              {/* User Mic Visualizer */}
              <div className="flex-1 bg-stone-950/50 rounded-xl border border-stone-800/50 overflow-hidden relative h-full">
                <Visualizer 
                  isActive={isConnected} 
                  analyserNode={inputAnalyser} 
                  color="#a8a29e" // Stone 400
                />
              </div>

              {/* AI Output Visualizer */}
              <div className="flex-1 bg-stone-950/50 rounded-xl border border-stone-800/50 overflow-hidden relative h-full">
                 <Visualizer 
                  isActive={isConnected} 
                  analyserNode={outputAnalyser} 
                  color="#d97706" // Amber 600
                />
              </div>
            </div>

            {/* Main Action Button */}
            <div className="flex justify-center">
              <button
                onClick={handleToggle}
                disabled={isConnecting}
                className={`
                  relative group flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg tracking-wide transition-all duration-300
                  ${isConnected 
                    ? 'bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/30' 
                    : 'bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white shadow-xl shadow-orange-700/20 hover:shadow-orange-700/40 hover:-translate-y-0.5'}
                  ${isConnecting && 'opacity-70 cursor-wait'}
                `}
              >
                {isConnected ? (
                  <>
                    <MicOff size={22} />
                    <span>Stop Order</span>
                  </>
                ) : isConnecting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Connecting...</span>
                  </>
                ) : (
                  <>
                    <Mic size={22} className="group-hover:scale-110 transition-transform" />
                    <span>Start Order</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-8 text-stone-600 text-xs font-medium tracking-wide">
        Powered by Murf Falcon AI
      </footer>
    </div>
  );
};

export default App;