const {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo
} = React;
const P = window.PROJECT;
const CATS = {};
(P.categories || []).forEach(c => {
  CATS[c.name] = c;
});
function getCat(name) {
  return CATS[name] || {
    color: '#c9a14a',
    code: '?'
  };
}
function Placeholder({
  kind,
  pointId,
  label
}) {
  const seed = (pointId || 0) * 137,
    isAfter = kind === 'after';
  const sky1 = isAfter ? '#243345' : '#1a242f',
    sky2 = isAfter ? '#1a2533' : '#121922';
  const ground1 = isAfter ? '#3a4a3a' : '#2a3528',
    ground2 = isAfter ? '#2a3a2b' : '#1d2820';
  const accent = isAfter ? '#c9a14a' : '#5d6878';
  const bx = 30 + seed * 7 % 40;
  const w = 1600,
    h = 900;
  if (kind === 'overview') {
    return /*#__PURE__*/React.createElement("svg", {
      viewBox: '0 0 ' + w + ' ' + h,
      xmlns: "http://www.w3.org/2000/svg",
      preserveAspectRatio: "xMidYMid slice",
      style: {
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%'
      }
    }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
      id: "sky-ov",
      x1: "0",
      y1: "0",
      x2: "0",
      y2: "1"
    }, /*#__PURE__*/React.createElement("stop", {
      offset: "0%",
      stopColor: "#1f2a35"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "100%",
      stopColor: "#10171f"
    })), /*#__PURE__*/React.createElement("linearGradient", {
      id: "gnd-ov",
      x1: "0",
      y1: "0",
      x2: "0",
      y2: "1"
    }, /*#__PURE__*/React.createElement("stop", {
      offset: "0%",
      stopColor: "#2d3a2c"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "100%",
      stopColor: "#1a2419"
    })), /*#__PURE__*/React.createElement("pattern", {
      id: "gr-ov",
      width: "80",
      height: "80",
      patternUnits: "userSpaceOnUse"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M80 0L0 0 0 80",
      fill: "none",
      stroke: "rgba(255,255,255,0.04)",
      strokeWidth: "1"
    })), /*#__PURE__*/React.createElement("radialGradient", {
      id: "vig-ov",
      cx: "50%",
      cy: "50%",
      r: "70%"
    }, /*#__PURE__*/React.createElement("stop", {
      offset: "60%",
      stopColor: "rgba(0,0,0,0)"
    }), /*#__PURE__*/React.createElement("stop", {
      offset: "100%",
      stopColor: "rgba(0,0,0,0.5)"
    }))), /*#__PURE__*/React.createElement("rect", {
      width: w,
      height: h * 0.45,
      fill: "url(#sky-ov)"
    }), /*#__PURE__*/React.createElement("rect", {
      y: h * 0.45,
      width: w,
      height: h * 0.55,
      fill: "url(#gnd-ov)"
    }), /*#__PURE__*/React.createElement("rect", {
      width: w,
      height: h,
      fill: "url(#gr-ov)"
    }), /*#__PURE__*/React.createElement("text", {
      x: w * 0.5,
      y: h * 0.5,
      textAnchor: "middle",
      fill: "rgba(255,255,255,0.2)",
      fontFamily: "JetBrains Mono,monospace",
      fontSize: h * 0.025,
      letterSpacing: "4"
    }, "[ \u0417\u0410\u0413\u0410\u041B\u042C\u041D\u0418\u0419 \u041F\u041B\u0410\u041D \xB7 \u041F\u041B\u0415\u0419\u0421\u0425\u041E\u041B\u0414\u0415\u0420 ]"), /*#__PURE__*/React.createElement("rect", {
      width: w,
      height: h,
      fill: "url(#vig-ov)"
    }));
  }
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: '0 0 ' + w + ' ' + h,
    xmlns: "http://www.w3.org/2000/svg",
    preserveAspectRatio: "xMidYMid slice",
    style: {
      width: '100%',
      height: '100%',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: 'sk-' + kind + '-' + pointId,
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: sky1
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: sky2
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: 'gn-' + kind + '-' + pointId,
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: ground1
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: ground2
  }))), /*#__PURE__*/React.createElement("rect", {
    width: w,
    height: h * 0.55,
    fill: 'url(#sk-' + kind + '-' + pointId + ')'
  }), /*#__PURE__*/React.createElement("rect", {
    y: h * 0.55,
    width: w,
    height: h * 0.45,
    fill: 'url(#gn-' + kind + '-' + pointId + ')'
  }), /*#__PURE__*/React.createElement("rect", {
    x: w * (bx / 100),
    y: h * 0.35,
    width: w * 0.30,
    height: h * 0.30,
    fill: isAfter ? '#3a4856' : '#2a3038',
    stroke: isAfter ? accent : 'rgba(255,255,255,0.1)',
    strokeWidth: isAfter ? 2 : 1
  }), /*#__PURE__*/React.createElement("text", {
    x: w / 2,
    y: h * 0.16,
    textAnchor: "middle",
    fontFamily: "JetBrains Mono,monospace",
    fontSize: h * 0.04,
    letterSpacing: "6",
    fill: isAfter ? accent : 'rgba(255,255,255,0.35)'
  }, label || (isAfter ? 'ПІСЛЯ' : 'ДО')));
}
function CompareSlider({
  pointId,
  before,
  after
}) {
  const [clip, setClip] = useState(50),
    dragging = useRef(false),
    frameRef = useRef(null);
  const [aspect, setAspect] = useState(16 / 9);
  const upd = useCallback(cx => {
    const el = frameRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setClip(Math.max(0, Math.min(100, (cx - r.left) / r.width * 100)));
  }, []);
  useEffect(() => {
    const mv = e => {
      if (!dragging.current) return;
      e.preventDefault();
      upd(e.touches ? e.touches[0].clientX : e.clientX);
    };
    const up = () => {
      dragging.current = false;
      document.body.style.cursor = '';
    };
    window.addEventListener('mousemove', mv);
    window.addEventListener('mouseup', up);
    window.addEventListener('touchmove', mv, {
      passive: false
    });
    window.addEventListener('touchend', up);
    return () => {
      window.removeEventListener('mousemove', mv);
      window.removeEventListener('mouseup', up);
      window.removeEventListener('touchmove', mv);
      window.removeEventListener('touchend', up);
    };
  }, [upd]);
  useEffect(() => {
    setClip(50);
  }, [pointId]);
  const start = e => {
    dragging.current = true;
    document.body.style.cursor = 'ew-resize';
    upd(e.touches ? e.touches[0].clientX : e.clientX);
  };
  const onKey = e => {
    if (e.key === 'ArrowLeft') setClip(c => Math.max(0, c - 4));
    if (e.key === 'ArrowRight') setClip(c => Math.min(100, c + 4));
  };
  const B = before ? /*#__PURE__*/React.createElement("img", {
    className: "compare-img",
    src: before,
    alt: P.compareBeforeLabel || 'до',
    onLoad: e => setAspect(e.target.naturalWidth / e.target.naturalHeight)
  }) : /*#__PURE__*/React.createElement(Placeholder, {
    kind: "before",
    pointId: pointId,
    label: P.compareBeforeLabel || 'ДО'
  });
  const A = after ? /*#__PURE__*/React.createElement("img", {
    className: "compare-img",
    src: after,
    alt: P.compareAfterLabel || 'після'
  }) : /*#__PURE__*/React.createElement(Placeholder, {
    kind: "after",
    pointId: pointId,
    label: P.compareAfterLabel || 'ПІСЛЯ'
  });
  return /*#__PURE__*/React.createElement("div", {
    className: "compare-frame",
    ref: frameRef,
    style: {
      '--clip': clip + '%',
      aspectRatio: aspect
    },
    onMouseDown: start,
    onTouchStart: start
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0
    }
  }, A), /*#__PURE__*/React.createElement("div", {
    className: "compare-clip"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      width: 'calc(100% * (100 / max(' + clip + ', 0.0001)))',
      minWidth: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0
    }
  }, B))), /*#__PURE__*/React.createElement("div", {
    className: "compare-tag before"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), P.compareBeforeLabel || 'ДО'), /*#__PURE__*/React.createElement("div", {
    className: "compare-tag after"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), P.compareAfterLabel || 'ПІСЛЯ'), /*#__PURE__*/React.createElement("div", {
    className: "compare-divider"
  }), /*#__PURE__*/React.createElement("div", {
    className: "compare-handle",
    role: "slider",
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    "aria-valuenow": Math.round(clip),
    tabIndex: 0,
    onKeyDown: onKey,
    onMouseDown: e => {
      e.stopPropagation();
      start(e);
    },
    onTouchStart: e => {
      e.stopPropagation();
      start(e);
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 4L3 10L7 16",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "square"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13 4L17 10L13 16",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "square"
  }))));
}
function TopBar({
  title,
  sub,
  left,
  right
}) {
  return /*#__PURE__*/React.createElement("header", {
    className: "topbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "topbar-left"
  }, left || /*#__PURE__*/React.createElement("div", {
    className: "brand-mark"
  }), /*#__PURE__*/React.createElement("div", {
    className: "title-stack"
  }, /*#__PURE__*/React.createElement("div", {
    className: "title-main"
  }, title), sub && /*#__PURE__*/React.createElement("div", {
    className: "title-sub"
  }, sub))), /*#__PURE__*/React.createElement("div", {
    className: "topbar-right"
  }, right));
}
function Marker({
  point,
  settings,
  onClick
}) {
  const cat = getCat(point.category);
  const [touched, setTouched] = useState(false);
  const touchTimer = useRef(null);
  const onTouch = e => {
    e.stopPropagation();
    setTouched(true);
    clearTimeout(touchTimer.current);
    touchTimer.current = setTimeout(() => setTouched(false), 2000);
  };
  const handleClick = e => {
    e.stopPropagation();
    if (onClick) onClick(point.id);
  };
  return /*#__PURE__*/React.createElement("button", {
    className: 'marker' + (touched ? ' touched' : ''),
    style: {
      left: point.x + '%',
      top: point.y + '%',
      '--marker-size': (settings.markerSize || 44) + 'px',
      '--marker-color': settings.markerColor || cat.color || 'var(--accent)',
      '--marker-radius': settings.markerShape === 'round' ? '50%' : '0'
    },
    onClick: handleClick,
    onTouchStart: onTouch,
    "aria-label": 'Точка ' + point.id + ': ' + point.title
  }, /*#__PURE__*/React.createElement("span", {
    className: "ring"
  }), /*#__PURE__*/React.createElement("span", {
    className: "core"
  }, point.id), /*#__PURE__*/React.createElement("span", {
    className: "label"
  }, point.title));
}
function ViewerApp() {
  const pts = useMemo(() => P.points || [], []);
  const settings = P;
  const photos = P.photos || {};
  const layers = useMemo(() => P.layers || (P.overview ? [{
    id: 1,
    name: 'Супутник',
    image: P.overview,
    visible: true
  }] : [{
    id: 1,
    name: 'Супутник',
    image: null,
    visible: true
  }]), []);
  const [layerVis, setLayerVis] = useState(() => {
    const m = {};
    layers.forEach(l => {
      m[l.id] = l.visible;
    });
    return m;
  });
  const [layersOpen, setLayersOpen] = useState(false);
  const toggleLayer = id => setLayerVis(v => ({
    ...v,
    [id]: !v[id]
  }));
  const [view, setView] = useState('schema');
  const [idx, setIdx] = useState(0);
  const [imgAspect, setImgAspect] = useState(16 / 9);
  const schemaWrapRef = useRef(null);
  const descRef = useRef(null);
  const [stageDims, setStageDims] = useState(null);
  const updateStageDims = useCallback(() => {
    const el = schemaWrapRef.current;
    if (!el) return;
    const {
      width: w,
      height: h
    } = el.getBoundingClientRect();
    if (!w || !h) return;
    const pad = 20,
      descH = descRef.current ? descRef.current.offsetHeight : 100;
    const avW = w - pad * 2,
      avH = h - pad * 2 - descH,
      capH = Math.min(avH, 900);
    let sw, sh;
    if (avW / capH >= imgAspect) {
      sh = capH;
      sw = sh * imgAspect;
    } else {
      sw = avW;
      sh = sw / imgAspect;
    }
    setStageDims({
      width: Math.round(sw) + 'px',
      height: Math.round(sh) + 'px'
    });
  }, [imgAspect]);
  useEffect(() => {
    updateStageDims();
    const el = schemaWrapRef.current;
    if (!el) return;
    const obs = new ResizeObserver(updateStageDims);
    obs.observe(el);
    return () => obs.disconnect();
  }, [updateStageDims]);
  const date = useMemo(() => {
    const d = new Date();
    return String(d.getDate()).padStart(2, '0') + '.' + String(d.getMonth() + 1).padStart(2, '0') + '.' + d.getFullYear();
  }, []);
  useEffect(() => {
    document.documentElement.dataset.theme = settings.theme || 'dark';
    document.documentElement.style.setProperty('--fs-base', (settings.fontSize || 15) + 'px');
  }, []);
  useEffect(() => {
    const onKey = e => {
      if (view === 'compare') {
        if (e.key === 'Escape') setView('schema');else if (e.key === 'ArrowLeft' && !e.target.closest('.compare-handle')) setIdx(i => (i - 1 + pts.length) % pts.length);else if (e.key === 'ArrowRight' && !e.target.closest('.compare-handle')) setIdx(i => (i + 1) % pts.length);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [view, pts.length]);
  const openPoint = id => {
    const i = pts.findIndex(p => p.id === id);
    if (i !== -1) {
      setIdx(i);
      setView('compare');
    }
  };
  if (view === 'summary') {
    const byCat = {};
    pts.forEach(p => {
      byCat[p.category] = (byCat[p.category] || 0) + 1;
    });
    return /*#__PURE__*/React.createElement("div", {
      className: "app"
    }, /*#__PURE__*/React.createElement(TopBar, {
      title: P.appTitle || 'План покращення ділянки',
      sub: 'ПРОПОЗИЦІЇ · ' + pts.length + ' ТОЧОК',
      left: /*#__PURE__*/React.createElement("button", {
        className: "btn btn-ghost btn-icon",
        onClick: () => setView('schema'),
        "aria-label": "\u041D\u0430\u0437\u0430\u0434"
      }, /*#__PURE__*/React.createElement("svg", {
        width: "14",
        height: "14",
        viewBox: "0 0 14 14",
        fill: "none"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M8 2L3 7L8 12",
        stroke: "currentColor",
        strokeWidth: "1.5"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M3 7L13 7",
        stroke: "currentColor",
        strokeWidth: "1.5"
      }))),
      right: /*#__PURE__*/React.createElement("button", {
        className: "btn",
        onClick: () => setView('schema')
      }, /*#__PURE__*/React.createElement("svg", {
        width: "12",
        height: "12",
        viewBox: "0 0 12 12",
        fill: "none"
      }, /*#__PURE__*/React.createElement("rect", {
        x: "1",
        y: "1",
        width: "4",
        height: "4",
        stroke: "currentColor",
        fill: "none"
      }), /*#__PURE__*/React.createElement("rect", {
        x: "7",
        y: "1",
        width: "4",
        height: "4",
        stroke: "currentColor",
        fill: "none"
      }), /*#__PURE__*/React.createElement("rect", {
        x: "1",
        y: "7",
        width: "4",
        height: "4",
        stroke: "currentColor",
        fill: "none"
      }), /*#__PURE__*/React.createElement("rect", {
        x: "7",
        y: "7",
        width: "4",
        height: "4",
        stroke: "currentColor",
        fill: "none"
      })), "\u0414\u043E \u0441\u0445\u0435\u043C\u0438")
    }), /*#__PURE__*/React.createElement("div", {
      className: "summary-wrap"
    }, /*#__PURE__*/React.createElement("div", {
      className: "summary-header"
    }, /*#__PURE__*/React.createElement("div", {
      className: "eyebrow"
    }, P.summaryEyebrow || 'Зведена відомість'), /*#__PURE__*/React.createElement("h1", null, P.summaryHeading || 'Перелік пропозицій'), /*#__PURE__*/React.createElement("div", {
      className: "mono",
      style: {
        display: 'flex',
        gap: 16,
        color: 'var(--text-2)',
        fontSize: 'var(--fs-sm)',
        letterSpacing: '0.08em',
        marginTop: 8,
        flexWrap: 'wrap'
      }
    }, Object.entries(byCat).map(([cat, n]) => {
      const c = getCat(cat);
      return /*#__PURE__*/React.createElement("span", {
        key: cat,
        className: "cat-chip",
        style: {
          color: c.color
        }
      }, /*#__PURE__*/React.createElement("span", {
        className: "dot"
      }), cat.toUpperCase(), " \xB7 ", n);
    }))), /*#__PURE__*/React.createElement("div", {
      className: "summary-grid"
    }, pts.map(p => {
      const cat = getCat(p.category);
      const ph = photos[p.id] || {};
      return /*#__PURE__*/React.createElement("div", {
        key: p.id,
        className: "summary-card",
        onClick: () => openPoint(p.id)
      }, /*#__PURE__*/React.createElement("div", {
        className: "summary-card-num mono"
      }, String(p.id).padStart(2, '0')), /*#__PURE__*/React.createElement("div", {
        className: "card-thumb"
      }, ph.after ? /*#__PURE__*/React.createElement("img", {
        src: ph.after,
        alt: p.title
      }) : /*#__PURE__*/React.createElement(Placeholder, {
        kind: "after",
        pointId: p.id,
        label: p.title,
        w: 640,
        h: 360
      })), /*#__PURE__*/React.createElement("div", {
        className: "card-body"
      }, /*#__PURE__*/React.createElement("h3", null, p.title), /*#__PURE__*/React.createElement("p", null, p.description), /*#__PURE__*/React.createElement("div", {
        style: {
          marginTop: 4
        }
      }, /*#__PURE__*/React.createElement("span", {
        className: "cat-chip mono",
        style: {
          color: cat.color,
          fontSize: 'var(--fs-xs)',
          letterSpacing: '0.1em'
        }
      }, /*#__PURE__*/React.createElement("span", {
        className: "dot"
      }), cat.code, " \xB7 ", p.category))));
    }))));
  }
  if (view === 'compare') {
    const pt = pts[idx];
    const cat = getCat(pt.category);
    const ph = photos[pt.id] || {};
    return /*#__PURE__*/React.createElement("div", {
      className: "app"
    }, /*#__PURE__*/React.createElement(TopBar, {
      title: pt.title,
      sub: 'ТОЧКА ' + String(pt.id).padStart(2, '0') + ' / ' + String(pts.length).padStart(2, '0') + ' · ' + pt.category.toUpperCase(),
      left: /*#__PURE__*/React.createElement("button", {
        className: "btn btn-ghost btn-icon",
        onClick: () => setView('schema')
      }, /*#__PURE__*/React.createElement("svg", {
        width: "14",
        height: "14",
        viewBox: "0 0 14 14",
        fill: "none"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M8 2L3 7L8 12",
        stroke: "currentColor",
        strokeWidth: "1.5"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M3 7L13 7",
        stroke: "currentColor",
        strokeWidth: "1.5"
      }))),
      right: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
        className: "btn btn-icon",
        onClick: () => setIdx(i => (i - 1 + pts.length) % pts.length)
      }, /*#__PURE__*/React.createElement("svg", {
        width: "14",
        height: "14",
        viewBox: "0 0 14 14",
        fill: "none"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M9 2L4 7L9 12",
        stroke: "currentColor",
        strokeWidth: "1.5"
      }))), /*#__PURE__*/React.createElement("span", {
        className: "mono",
        style: {
          fontSize: 'var(--fs-xs)',
          color: 'var(--text-2)',
          letterSpacing: '0.1em',
          padding: '0 4px'
        }
      }, String(idx + 1).padStart(2, '0'), " / ", String(pts.length).padStart(2, '0')), /*#__PURE__*/React.createElement("button", {
        className: "btn btn-icon",
        onClick: () => setIdx(i => (i + 1) % pts.length)
      }, /*#__PURE__*/React.createElement("svg", {
        width: "14",
        height: "14",
        viewBox: "0 0 14 14",
        fill: "none"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M5 2L10 7L5 12",
        stroke: "currentColor",
        strokeWidth: "1.5"
      }))), /*#__PURE__*/React.createElement("div", {
        style: {
          width: 1,
          height: 20,
          background: 'var(--line-2)',
          margin: '0 2px'
        }
      }), /*#__PURE__*/React.createElement("button", {
        className: "btn btn-icon",
        onClick: () => setView('schema')
      }, /*#__PURE__*/React.createElement("svg", {
        width: "12",
        height: "12",
        viewBox: "0 0 12 12",
        fill: "none"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M2 2L10 10M10 2L2 10",
        stroke: "currentColor",
        strokeWidth: "1.5"
      }))))
    }), /*#__PURE__*/React.createElement("div", {
      className: "compare-wrap"
    }, /*#__PURE__*/React.createElement("div", {
      className: "compare-stage"
    }, /*#__PURE__*/React.createElement(CompareSlider, {
      pointId: pt.id,
      before: ph.before || null,
      after: ph.after || null
    })), /*#__PURE__*/React.createElement("div", {
      className: "compare-info"
    }, /*#__PURE__*/React.createElement("div", {
      className: "compare-info-main"
    }, /*#__PURE__*/React.createElement("div", {
      className: "eyebrow"
    }, P.comparePointLabel || 'Пропозиція', " \xB7 ", String(pt.id).padStart(2, '0')), /*#__PURE__*/React.createElement("h2", null, pt.title), /*#__PURE__*/React.createElement("p", null, pt.description)), /*#__PURE__*/React.createElement("div", {
      className: "compare-info-meta"
    }, /*#__PURE__*/React.createElement("span", {
      className: "cat-chip",
      style: {
        color: cat.color
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "dot"
    }), cat.code || '', " \xB7 ", pt.category)))));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "app"
  }, /*#__PURE__*/React.createElement(TopBar, {
    title: P.appTitle || 'План покращення ділянки',
    sub: 'СХЕМА · ' + pts.length + ' ТОЧОК · ' + date,
    right: /*#__PURE__*/React.createElement("button", {
      className: "btn",
      onClick: () => setView('summary')
    }, /*#__PURE__*/React.createElement("svg", {
      width: "12",
      height: "12",
      viewBox: "0 0 12 12",
      fill: "none"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "1",
      y: "2",
      width: "10",
      height: "1.5",
      fill: "currentColor"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "1",
      y: "5.25",
      width: "10",
      height: "1.5",
      fill: "currentColor"
    }), /*#__PURE__*/React.createElement("rect", {
      x: "1",
      y: "8.5",
      width: "10",
      height: "1.5",
      fill: "currentColor"
    })), "\u0423\u0441\u0456 \u043F\u0440\u043E\u043F\u043E\u0437\u0438\u0446\u0456\u0457")
  }), /*#__PURE__*/React.createElement("div", {
    className: "schema-wrap",
    ref: schemaWrapRef
  }, /*#__PURE__*/React.createElement("div", {
    className: "schema-and-desc"
  }, /*#__PURE__*/React.createElement("div", {
    className: "schema-stage-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "schema-stage",
    style: stageDims || {
      aspectRatio: imgAspect
    }
  }, layers.some(l => layerVis[l.id] && l.image) ? layers.filter(l => layerVis[l.id] && l.image).map((layer, i) => /*#__PURE__*/React.createElement("img", {
    key: layer.id,
    className: "schema-photo",
    src: layer.image,
    alt: layer.name,
    onLoad: i === 0 ? e => setImgAspect(e.target.naturalWidth / e.target.naturalHeight) : undefined
  })) : /*#__PURE__*/React.createElement(Placeholder, {
    kind: "overview"
  }), /*#__PURE__*/React.createElement("div", {
    className: "schema-overlay"
  }), /*#__PURE__*/React.createElement("div", {
    className: "schema-scan"
  }), pts.map(p => /*#__PURE__*/React.createElement(Marker, {
    key: p.id,
    point: p,
    settings: settings,
    onClick: openPoint
  })), /*#__PURE__*/React.createElement("div", {
    className: "schema-meta"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "\u0421\u0415\u041A\u0422\u041E\u0420"), " \xB7 ", P.schemaSector || 'A-01'), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, date))), /*#__PURE__*/React.createElement("div", {
    className: "schema-corner tl"
  }), /*#__PURE__*/React.createElement("div", {
    className: "schema-corner tr"
  }), /*#__PURE__*/React.createElement("div", {
    className: "schema-corner bl"
  }), /*#__PURE__*/React.createElement("div", {
    className: "schema-corner br"
  })), /*#__PURE__*/React.createElement("div", {
    className: "layer-switcher"
  }, layersOpen && /*#__PURE__*/React.createElement("div", {
    className: "layer-panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "layer-panel-hd"
  }, "\u0428\u0430\u0440\u0438"), layers.map((layer, i) => /*#__PURE__*/React.createElement("div", {
    key: layer.id,
    className: "layer-panel-item",
    onClick: i > 0 ? () => toggleLayer(layer.id) : undefined,
    style: i === 0 ? {
      cursor: 'default'
    } : {}
  }, /*#__PURE__*/React.createElement("div", {
    className: "layer-check on",
    style: i === 0 ? {} : {
      background: layerVis[layer.id] ? undefined : 'transparent',
      borderColor: layerVis[layer.id] ? undefined : 'var(--line-2)'
    }
  }, i === 0 ? /*#__PURE__*/React.createElement("svg", {
    width: "7",
    height: "7",
    viewBox: "0 0 7 7",
    fill: "none"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "3",
    width: "6",
    height: "3.5",
    rx: "0.5",
    stroke: "#0a0e13",
    strokeWidth: "1.1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 3V2C2 0.9 5 0.9 5 2V3",
    stroke: "#0a0e13",
    strokeWidth: "1.1"
  })) : layerVis[layer.id] && /*#__PURE__*/React.createElement("svg", {
    width: "9",
    height: "7",
    viewBox: "0 0 9 7",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 3.5L3.5 6L8 1",
    stroke: "#0a0e13",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  }))), /*#__PURE__*/React.createElement("span", {
    className: "layer-panel-name"
  }, layer.name)))), /*#__PURE__*/React.createElement("button", {
    className: 'layer-switcher-btn' + (layersOpen ? ' active' : ''),
    onClick: () => setLayersOpen(v => !v),
    title: "\u0428\u0430\u0440\u0438"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "12",
    viewBox: "0 0 14 12",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 4L7 1L13 4L7 7L1 4Z",
    stroke: "currentColor",
    strokeWidth: "1.3",
    fill: "none"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M1 7.5L7 10.5L13 7.5",
    stroke: "currentColor",
    strokeWidth: "1.3"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "schema-desc",
    ref: descRef
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow"
  }, "\u041F\u0440\u043E \u043F\u0440\u043E\u0454\u043A\u0442"), /*#__PURE__*/React.createElement("p", null, P.projectDescription || '')), /*#__PURE__*/React.createElement("div", {
    className: "schema-desc-stats"
  }, /*#__PURE__*/React.createElement("div", {
    className: "schema-desc-stat"
  }, /*#__PURE__*/React.createElement("b", null, pts.length), "\u0442\u043E\u0447\u043E\u043A"))))));
}
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(ViewerApp));