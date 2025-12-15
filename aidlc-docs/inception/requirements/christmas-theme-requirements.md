# Christmas Theme Feature - Requirements Document

## 1. Overview

**Feature Name**: Christmas Theme Toggle  
**Feature Type**: Visual Enhancement / Theming  
**Priority**: P2 (Should Have)  
**Estimated Complexity**: Low-Medium  

### 1.1 Description
เพิ่มความสามารถให้ผู้ใช้สามารถเปลี่ยน theme ของเกม Tic-Tac-Toe จาก Retro (Game Boy) เป็น Christmas theme ได้ โดยมีปุ่ม toggle สำหรับสลับ theme

---

## 2. Functional Requirements

### FR-CT-001: Theme Toggle Button
**Description**: ระบบต้องมีปุ่ม toggle สำหรับสลับระหว่าง Retro theme และ Christmas theme  
**Acceptance Criteria**:
- [ ] ปุ่ม toggle อยู่ที่มุมบนซ้าย (ตรงข้ามกับปุ่มเสียงที่อยู่มุมบนขวา)
- [ ] แสดง icon 🎄 เมื่อเป็น Christmas theme
- [ ] แสดง icon 🎮 เมื่อเป็น Retro theme
- [ ] คลิกแล้ว theme เปลี่ยนทันที (instant feedback)

### FR-CT-002: Christmas Color Palette
**Description**: Christmas theme ต้องใช้สีแดง-เขียวแบบคลาสสิก  
**Color Specifications**:
```
--christmas-bg-dark: #1a472a      /* Dark forest green */
--christmas-bg-medium: #2d5a3d    /* Medium green */
--christmas-bg-light: #3d7a4a     /* Light green */
--christmas-bg-lightest: #4a9a5a  /* Lightest green */
--christmas-accent: #c41e3a       /* Christmas red */
--christmas-accent-secondary: #ffd700  /* Gold */
--christmas-text-light: #f5f5dc   /* Cream white */
--christmas-text-dark: #1a472a    /* Dark green */
```

### FR-CT-003: Christmas Visual Elements
**Description**: เพิ่ม icons ประดับตกแต่งในโหมด Christmas  
**Acceptance Criteria**:
- [ ] Title เปลี่ยนจาก "TIC-TAC-TOE" เป็น "🎄 TIC-TAC-TOE 🎄"
- [ ] เพิ่ม ⭐ ที่มุมต่างๆ ของ game container
- [ ] ปุ่มต่างๆ มีสีแดง-เขียว Christmas

### FR-CT-004: Christmas Game Symbols
**Description**: สัญลักษณ์ X และ O เปลี่ยนเป็น emoji ในโหมด Christmas  
**Acceptance Criteria**:
- [ ] Player 1 (X) แสดงเป็น 🎄 (Christmas Tree)
- [ ] Player 2 (O) แสดงเป็น ⭐ (Star)
- [ ] ขนาด emoji ต้องพอดีกับ cell
- [ ] Animation ยังคงทำงานปกติ

### FR-CT-005: Theme Persistence
**Description**: ระบบต้องจำ theme ที่ผู้ใช้เลือกไว้  
**Acceptance Criteria**:
- [ ] บันทึก theme preference ลง localStorage
- [ ] เมื่อเปิดเกมใหม่ ใช้ theme ที่เลือกไว้ล่าสุด
- [ ] Default theme คือ Retro (ถ้าไม่มีข้อมูลใน localStorage)

---

## 3. Non-Functional Requirements

### NFR-CT-001: Performance
- การเปลี่ยน theme ต้องเกิดขึ้นทันที (< 100ms)
- ไม่มี flicker หรือ layout shift ระหว่างเปลี่ยน theme

### NFR-CT-002: Compatibility
- ทำงานได้บน browsers ที่รองรับ (Chrome, Firefox, Safari, Edge)
- Responsive design ยังคงทำงานได้ทั้ง 2 themes

### NFR-CT-003: Accessibility
- Theme toggle ต้องมี aria-label ที่เหมาะสม
- Emoji ต้องมี sufficient contrast

---

## 4. Technical Implementation Notes

### 4.1 Files to Modify
| File | Changes |
|------|---------|
| `src/assets/styles/main.css` | เพิ่ม CSS variables สำหรับ Christmas theme |
| `src/App.vue` | เพิ่ม ThemeToggle component |
| `src/components/GameCell.vue` | รองรับ emoji symbols |

### 4.2 New Files to Create
| File | Purpose |
|------|---------|
| `src/components/ThemeToggle.vue` | ปุ่ม toggle theme |
| `src/composables/useTheme.js` | Theme state management + localStorage |

### 4.3 CSS Strategy
- ใช้ CSS class `.christmas-theme` บน root element
- CSS variables จะถูก override เมื่อมี class นี้
- ไม่ต้องแก้ไข component styles มากนัก

---

## 5. User Stories Mapping

| Requirement | User Story |
|-------------|------------|
| FR-CT-001 | As a player, I want to toggle between themes so that I can enjoy a festive experience |
| FR-CT-004 | As a player, I want Christmas symbols so that the game feels more festive |
| FR-CT-005 | As a player, I want my theme preference saved so that I don't have to change it every time |

---

## 6. Summary

### Features
✅ Toggle button สำหรับสลับ theme (มุมบนซ้าย)  
✅ Christmas color palette (Red & Green classic)  
✅ Christmas icons ตกแต่ง (🎄⭐)  
✅ Game symbols เปลี่ยนเป็น 🎄 vs ⭐  
✅ บันทึก preference ใน localStorage  

### Estimated Changes
- **New Files**: 2 files
- **Modified Files**: 3 files
- **Lines of Code**: ~150-200 lines


