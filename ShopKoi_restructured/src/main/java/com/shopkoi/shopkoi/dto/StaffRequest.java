
package com.shopkoi.shopkoi.dto;

import com.shopkoi.shopkoi.Service.StaffSchedule;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class StaffRequest {
    private String staffName;
    private String staffEmail;
    private String staffPhone;
    private Set<StaffSchedule> staffSchedule;
    private String staffPassword;
    private String profilephoto;


}
