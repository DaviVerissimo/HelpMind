//package com.helpmind.model;
//
//import org.springframework.security.core.GrantedAuthority;
//
//import javax.persistence.*;
//import java.io.Serializable;
//
//@Entity
//@Table(name = "ROLE")
//public class Role implements GrantedAuthority, Serializable {
//    private static final long serialVersionUID = 1L;
//
//    @Id
//    @GeneratedValue(strategy = GenerationType.AUTO)
//    private Integer roleId;
//    @Enumerated(EnumType.STRING)
//    @Column(nullable = false, unique = true)
//    private RoleName roleName;
//
//
//    @Override
//    public String getAuthority() {
//        return this.roleName.toString();
//    }
//
//    public Integer getRoleId() {
//        return roleId;
//    }
//
//    public void setRoleId(Integer roleId) {
//        this.roleId = roleId;
//    }
//
//    public RoleName getRoleName() {
//        return roleName;
//    }
//
//    public void setRoleName(RoleName roleName) {
//        this.roleName = roleName;
//    }
//}