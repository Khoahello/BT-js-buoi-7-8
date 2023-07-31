var so_nArr = []
function themSo() {
    var so_n = document.querySelector("#nhap-so-n").value * 1
    so_nArr.push(so_n)
    document.getElementById("phan-tu-mang-n").innerHTML = so_nArr
}

// 1. Tổng số dương
function tinhTongSoDuong() {
    var tongSoduong = 0
    so_nArr.forEach(function(item) {
        if (item > 0) {
            tongSoduong += item
        }
    })
    document.getElementById("tong-so-duong").innerText = `Tổng số dương: ${tongSoduong}`
}

// 2. Đếm số dương
function demSoDuong() {
    var soLuongSoDuong = 0
    so_nArr.forEach(function(item) {
        if (item > 0) {
            soLuongSoDuong++
        }
    })
    document.getElementById("so-luong-so-duong").innerText = `Số dương: ${soLuongSoDuong}`
}

// 3. Tìm số nhỏ nhất
function timSoNhoNhat() {
    var soNhonhat = so_nArr[0]
    for (i = 0; i < so_nArr.length; i++) {
        if (soNhonhat > so_nArr[i])
        soNhonhat = so_nArr[i]
    }
    document.getElementById("so-nho-nhat").innerText = `Số nhỏ nhất: ${soNhonhat}`
}

// 4. Tìm số dương nhỏ nhất
// Cách 1:
var so_duongArr = []
function timSoDuongNhoNhat() {
    so_nArr.forEach(function(item) {
        if (item > 0) {
            so_duongArr.push(item)
        }
    })
    if (so_duongArr.length == 0) {
        document.getElementById("so-duong-nho-nhat").innerText = `Không có số dương`
    } else {
        var soDuongNhoNhat = so_duongArr[0]
        for (i = 0; i < so_duongArr.length; i++) {
            if (soDuongNhoNhat > so_duongArr [i]) {
                soDuongNhoNhat = so_duongArr [i]
            }
        }
        document.getElementById("so-duong-nho-nhat").innerText = `Số dương nhỏ nhất: ${soDuongNhoNhat}`
    }
}

// Cách 2:
// function timSoDuongNhoNhat() {
//     var soDuongNhoNhat = so_nArr[0]
//     var soLuongSoDuong = 0
//     so_nArr.forEach(function(item) {
//         if (item > 0) {
//             soLuongSoDuong++
//         }
//     })
//     if (soLuongSoDuong == 0) {
//         document.getElementById("so-duong-nho-nhat").innerText = `Không có số dương`
//     } else {
//         for (i = 0; i < so_nArr.length; i++) {
//             if (so_nArr[i] > 0) {
//                 if (soDuongNhoNhat > so_nArr[i]) {
//                     soDuongNhoNhat = so_nArr[i]
//                 }
//             }
//         }
//         document.getElementById("so-duong-nho-nhat").innerText = `Số dương nhỏ nhất: ${soDuongNhoNhat}`
//     }
// }

// 5. Tìm số chẵn cuối cùng
function timSoChanCuoiCung() {
    var soChanCuoiCung = -1
    for (i = 0; i < so_nArr.length; i++) {
        if (so_nArr[i] % 2 == 0) {
            soChanCuoiCung = so_nArr[i]
        }
    }
    if (soChanCuoiCung == -1) {
        document.getElementById("so-chan-cuoi-cung").innerText = `Không có số chẵn`
    } else {
        document.getElementById("so-chan-cuoi-cung").innerText = `Số chẵn cuối cùng: ${soChanCuoiCung}`
    }
}

// 6. Đổi chỗ
function doiCho() {
    var soViTri1 = document.getElementById("so-vi-tri-1").value * 1
    var soViTri2 = document.getElementById("so-vi-tri-2").value * 1
    var giaTri1 = so_nArr[soViTri1]
    var giaTri2 = so_nArr[soViTri2]
    so_nArr[soViTri1] = giaTri2
    so_nArr[soViTri2] = giaTri1
    // var mangnSauKhiDoi = so_nArr.reduce(function (phan_tu_n,number) {
    //     return phan_tu_n +',' + number;
    // });
    document.getElementById("doi-cho").innerHTML = `Mảng sau khi đổi: ${so_nArr}`
}

// 7. Sắp xếp tăng dần
function sapXepTangDan() {
    so_nArr.sort(function(a, b){return a - b})
    document.getElementById("sap-xep-tang-dan").innerHTML = so_nArr
}

// 8. Tìm số nguyên tố đầu tiên
function timSoNguyenToDauTien() {
    var mang_SoNguyenTo = []
    for (i = 0; i < so_nArr.length; i++) {
        var check = 1
        if (so_nArr[i] > 1) {
            for (a = 2; a < so_nArr[i] - 1; a++) {
                if (so_nArr[i] % a == 0) {
                    check = 0
                }
            }
            if (check == 1) {
                mang_SoNguyenTo.push(so_nArr[i])
            }
        }
    }
    
    if (mang_SoNguyenTo.length == 0) {
        document.getElementById("so-nguyen-to-dau-tien").innerText = `Không có số nguyên tố`
    } else {
        var soNguyenToDauTien = mang_SoNguyenTo[0]
        document.getElementById("so-nguyen-to-dau-tien").innerText = `Số nguyên tố đầu tiên: ${soNguyenToDauTien}`
    }
}

var mang_SoNguyen = []
// 9. Đếm số nguyên
function themSoMangNguyen() {
    var phanTuMangNguyen = document.getElementById("nhap-de-dem-so-nguyen").value * 1
    mang_SoNguyen.push(phanTuMangNguyen)
    document.getElementById("phan-tu-mang-so-nguyen").innerHTML = mang_SoNguyen
}

function demSoNguyen() {
    var soLuongSoNguyen = 0
    mang_SoNguyen.forEach(function(item) {
        if (Number.isInteger(item) == true) {
            soLuongSoNguyen++
        }
    })
    document.getElementById("so-nguyen").innerText = `Số lượng số nguyên: ${soLuongSoNguyen}`
}

// 10. So sánh số lượng số âm và dương
function soSanhAmDuong() {
    var soLuongSoDuong_mangn = 0
    var soLuongSoAm_mangn = 0
    so_nArr.forEach(function(item) {
        if (item > 0) {
            soLuongSoDuong_mangn++
        }
        if (item < 0) {
            soLuongSoAm_mangn++
        }
    })
    if (soLuongSoDuong_mangn > soLuongSoAm_mangn) {
        document.getElementById("so-sanh-so-am-duong").innerText = `Số dương > Số âm`
    } else if (soLuongSoDuong_mangn < soLuongSoAm_mangn) {
        document.getElementById("so-sanh-so-am-duong").innerText = `Số Âm > Số dương`
    } else {
        document.getElementById("so-sanh-so-am-duong").innerText = `Số dương = Số âm`
    }
}