import React, { useState } from 'react'
import { petals } from '../constants'

const Gifts = () => {
    const [amount, setAmount] = useState('');
    const [custom, setCustom] = useState('');
    const [method, setMethod] = useState('');
    const [copied, setCopied] = useState('');
    const presets = ['25','50','100','200'];
    const finalAmount = custom || amount;

    const payDetails = {
        zelle: { label: 'Zelle', value: '+1 (310) 555-0192', icon: '💜' },
        cashapp: { label: 'Cash App', value: '$BarbieKen-Wedding2026', icon: '💚' },
        venmo: { label: 'Venmo', value: '@BarbieKen-Wedding', icon: '💙' },
    };

    const copyToClipboard = (text, key) => {
        navigator.clipboard.writeText(text).then(() => {
        setCopied(key);
        setTimeout(() => setCopied(''), 2000);
        });
    };

  return (
    <section className="py-24 overflow-hidden" id='gifts'>  
        {petals.map((p, i) => (
            <div
            key={i}
            className="petal"
            style={{
                width: p.w, height: p.h,
                top: p.top, left: p.left, right: p.right, bottom: p.bottom,
                backgroundColor: p.bg,
                animationDelay: p.delay,
            }}
            />
        ))}
        <div className="max-w-2xl mx-auto px-6">
            <div className="text-center mb-14">
                <p className="font text-lavender-100 text-xs tracking-widest uppercase font-semibold mb-2">
                    Bless the Couple
                </p>
                <h2 className="font-serif text-4xl text-violet-900">
                    Wedding Gifts
                </h2>
                <p className="font text-white mt-3 text-sm max-w-md mx-auto leading-relaxed">
                    Your presence is our greatest gift. But Your Money is even Greater. 💕
                </p>
            </div>

            <div className="bg-linear-to-br from-lilac-50 to-babypink-50 rounded-3xl shadow-lg p-8 border border-lilac-100">
                    {/* Amount section */}
                    <label className="block font text-xs text-lilac-500 tracking-widest uppercase font-semibold mb-3">Choose an Amount</label>
                    <div className="grid grid-cols-4 gap-2 mb-3">
                        {presets.map(p => (
                            <button key={p} onClick={() => { setAmount(p); setCustom(''); }}
                                className={`py-3 rounded-xl font font-bold text-sm border-2 transition-all ${amount === p && !custom ? 'border-babypink-400 bg-babypink-50 text-babypink-500' : 'border-lilac-100 bg-white text-gray-500 hover:border-lilac-300'}`}>
                                ${p}
                            </button>
                        ))}
                    </div>
                    
                
                <input type="number" placeholder='custom amount (USD)' value={custom} onChange={e => { setCustom(e.target.value); setAmount(''); }}
                    className="w-full border-2 border-lilac-100 rounded-xl px-4 py-3 font text-sm text-gray-700 bg-white mb-6"
                />

                {/* Method to give money */}
                <label className='block font text-xs text-lilac-500 tracking-widest uppercase font-semibold mb-3'>
                    Choose Payment Method
                </label>
                <div className="grid grid-cols-3 gap-3 mb-6">
                    {Object.entries(payDetails).map(([key, d]) => (
                        <button key={key} onClick={() => setMethod(key)}
                            className={`py-3 rounded-xl font text-xs font-bold uppercase border-2 transition-all flex flex-col items-center gap-1 ${method === key ? 'border-babypink-400 bg-babypink-50 text-babypink-500' : 'border-lilac-100 bg-white text-gray-400 hover:border-lilac-300'}`}>
                            <span className="text-xl">{d.icon}</span>{d.label}
                        </button>
                    ))}
                </div>

                {/* Selected Method Details */}
                {method && (
                <div className="bg-white rounded-2xl p-5 border border-lilac-100 mb-6">
                    <div className="flex items-center justify-between">
                        <div>
                        <p className="font text-xs text-gray-400 uppercase tracking-wider mb-1">{payDetails[method].label} Handle</p>
                        <p className="font text-lg font-bold text-lilac-700">{payDetails[method].value}</p>
                        {finalAmount && <p className="font text-xs text-babypink-400 mt-1">Sending: <strong>${finalAmount}</strong></p>}
                        </div>
                        <button onClick={() => copyToClipboard(payDetails[method].value, method)}
                        className={`copy-pill px-4 py-2 rounded-full font text-xs font-semibold transition-all ${copied === method ? 'bg-green-100 text-green-600' : 'bg-lilac-100 text-lilac-600 hover:bg-lilac-200'}`}>
                        {copied === method ? '✓ Copied!' : 'Copy'}
                        </button>
                    </div>
                </div>
                )}
                {/* Message */}
                <p className="font text-xs text-gray-400 text-center leading-relaxed">
                    Please include your name and "Wedding Gift" in the payment note.<br/>
                    For international guests: wire transfer details available upon request.
                </p>
          </div>
        </div>
    </section>
  )
}

export default Gifts