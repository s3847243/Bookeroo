package com.rmit.sept.bk_loginservices.model;

import javax.persistence.*;
import java.util.Collection;

@Entity
public class Role{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String name;
    @ManyToMany(mappedBy = "roles")
    private Collection<User> users;

    @ManyToMany
    @JoinTable(
            name = "roles_privileges",
            joinColumns = @JoinColumn(
                    name = "role_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(
                    name = "privilege_id", referencedColumnName = "id"))
    private Collection<Privilege> privileges;

    public Role(String name){
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setPrivileges(Collection<Privilege> privileges){
        this.privileges = privileges;
    }

    public Collection<Privilege> getPrivileges(){
        return privileges;
    }

    public String toString(){
        return name;
    }
}