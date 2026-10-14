import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useLanguage } from '../contexts/LanguageContext';
import { WifiOff, RefreshCw, CheckCircle2 } from 'lucide-react';

export default function OfflineBanner() {
  const { isOnline, syncStatus, triggerOfflineSync } = useAuth();
  const { lang } = useLanguage();
  const [syncing, setSyncing] = React.useState(false);

  const handleSync = async () => {
    setSyncing(true);
    await triggerOfflineSync();
    setSyncing(false);
  };

  if (isOnline && syncStatus.pendingCount === 0) return null;

  return (
    <div className={`py-2 px-4 transition-all duration-300 ${
      !isOnline
        ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-sm'
        : 'bg-gradient-to-r from-brand-teal to-teal-700 text-white shadow-sm'
    }`}>
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm font-semibold">
        <div className="flex items-center gap-2">
          {!isOnline ? (
            <>
              <WifiOff className="w-4 h-4 animate-bounce" />
              <span>
                {lang === 'or'
                  ? 'ଆପଣ ଅଫଲାଇନ୍ ଅଛନ୍ତି । ଆପଣଙ୍କ ଫୋନର ଭଲ୍ଟରୁ ପାଠ ଓ କୁଇଜ୍ ନିରବଚ୍ଛିନ୍ନ ଭାବରେ ଚାଲିଛି ।'
                  : 'You are currently offline. Learning is powered by your local IndexedDB Vault.'}
              </span>
            </>
          ) : (
            <>
              <CheckCircle2 className="w-4 h-4 text-emerald-300" />
              <span>
                {lang === 'or'
                  ? `ଇଣ୍ଟରନେଟ୍ ଫେରିଆସିଛି ! ${syncStatus.pendingCount} ଗୋଟି ଅଫଲାଇନ୍ କୁଇଜ୍ ଫଳାଫଳ କ୍ଲାଉଡ୍ ରେ ସିଙ୍କ ହେବାକୁ ବାକି ଅଛି ।`
                  : `Internet restored! You have ${syncStatus.pendingCount} offline quiz attempt(s) waiting to sync.`}
              </span>
            </>
          )}
        </div>

        {isOnline && syncStatus.pendingCount > 0 && (
          <button
            onClick={handleSync}
            disabled={syncing}
            className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white text-brand-navy hover:bg-slate-100 text-xs font-bold transition-all shadow-xs"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${syncing ? 'animate-spin' : ''}`} />
            <span>{syncing ? (lang === 'or' ? 'ସିଙ୍କ ହେଉଛି...' : 'Syncing...') : (lang === 'or' ? 'କ୍ଲାଉଡ୍ ସିଙ୍କ କରନ୍ତୁ' : 'Sync Now')}</span>
          </button>
        )}
      </div>
    </div>
  );
}
